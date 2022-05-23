import renderedMessageField from './messageField';

const context = {
    messageField: 'message-field',
    messageFieldAttach: 'message-field-attach',
    messageFieldInput: 'message-field-input',
    messageFieldPlaceholder: 'Написать сообщение...'
};

export default renderedMessageField.compile(context);
