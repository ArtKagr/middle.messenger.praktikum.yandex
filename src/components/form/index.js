import renderedForm from "./form.js";

const formContext = {
    className: 'form',
    formHandler: () => {
        console.warn('form')
    }
};

export default renderedForm.compile(formContext);
