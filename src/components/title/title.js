import Templator from "../../utils/templator.js";
import textData from './title.tmpl.js';

export default {
    pageTitle: new Templator(textData.pageTitle),
    mainText: new Templator(textData.mainText),
    secondaryText: new Templator(textData.secondaryText)
};
