import Templator from "../../../../utils/templator";
import { userSettings, user } from './user.tmpl';


export const renderedUser = new Templator(user);
export const renderedUserSettings = new Templator(userSettings);
