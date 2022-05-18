import {get} from "./get";

export default class Templator {
    VALUE_TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(ctx);
    }

    compileArray(array) {
        return array.reduce((preVal, ctx) => {
            preVal = preVal.concat(this._compileTemplate(ctx))
            return preVal
        }, '')
    }

    _compileTemplate(ctx) {
        let tmpl = this._template;

        tmpl.match(this.VALUE_TEMPLATE_REGEXP).forEach((value) => {
            const clearedValue = value.replace(/[{}\s]/gi, '')
            const data = get(ctx, clearedValue)
            const changedData = typeof data === "function" ? `window.${clearedValue}()` : data

            if (typeof data === "function") {
                window[clearedValue] = data;
            }

            tmpl = tmpl.replace(new RegExp(value, "gi"), changedData)
        })

        return tmpl;
    }
}
