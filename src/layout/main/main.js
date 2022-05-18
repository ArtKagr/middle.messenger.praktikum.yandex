import Templator from "../../utils/templator";
import layoutTemplate from './main.tmpl'

const tmpl = new Templator(layoutTemplate)

const context = {
    className: 'layout'
}

export default tmpl.compile(context)
