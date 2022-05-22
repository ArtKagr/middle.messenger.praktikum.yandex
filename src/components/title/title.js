import Templator from "../../utils/templator";
import textData from './title.tmpl';

export default {
    pageTitle: new Templator(textData.pageTitle),
    mainText: new Templator(textData.mainText),
    secondaryText: new Templator(textData.secondaryText)
}
