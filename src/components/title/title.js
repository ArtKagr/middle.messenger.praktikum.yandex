import Templator from "../../utils/templator";
import titleTemplator from './title.tmpl'

const tmpl = new Templator(titleTemplator)

const authTitleContext = { className: 'title', text: 'Авторизация' }
const regTitleContext = { className: 'title', text: 'Регистрация' }

export const authTitle = tmpl.compile(authTitleContext)
export const regTitle = tmpl.compile(regTitleContext)
