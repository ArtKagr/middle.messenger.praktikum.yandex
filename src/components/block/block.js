import Templator from "../../utils/templator";
import blockTemplate from "./block.tmpl";

const tmpl = new Templator(blockTemplate);

const context = {
    text: 'Мой очень важный span',
    chatsTitle: 'chats-title',
    className: 'chats',
    user: {
        info: {
            firstName: 'Alexander',
        }
    },
    handleClick: function() {
        console.log('yea scuko')
    }
}

export default tmpl.compile(context)
