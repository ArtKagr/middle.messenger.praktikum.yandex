import {get} from "./get.js";

export default class Templator {
    VALUE_TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(ctx);
    }

    compileArray(array) {
        return array.reduce((preVal, ctx) => preVal.concat(this._compileTemplate(ctx)), '')
    }

    _compileTemplate(ctx) {
        let tmpl = this._template;

        tmpl.match(this.VALUE_TEMPLATE_REGEXP).forEach((value) => {
            const clearedValue = value.replace(/[{}\s]/gi, '')
            const data = get(ctx, clearedValue)
            const isFunction = typeof data === "function"
            const changedData = isFunction ? `window.${clearedValue}()` : data

            if (isFunction) {
                window[clearedValue] = data;
            }

            tmpl = tmpl.replace(new RegExp(value, "gi"), changedData)
        })

        return tmpl;
    }
}
