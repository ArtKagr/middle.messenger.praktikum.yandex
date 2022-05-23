import renderedForm from './form';

const formContext = {
    className: 'form',
    formHandler: () => {
        console.warn('form')
    }
};

export default renderedForm.compile(formContext);
