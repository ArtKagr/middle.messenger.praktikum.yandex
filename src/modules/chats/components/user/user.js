import Templator from "../../../../utils/templator.js";
import { userSettings, user } from './user.tmpl.js';


export const renderedUser = new Templator(user);
export const renderedUserSettings = new Templator(userSettings);
