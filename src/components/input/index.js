import renderedInput from '../input/input';

const authInputsContext = [
    { inputClass: 'chats-input', inputValue: 'ivan@example.com', inputPlaceholder: 'E-mail', inputType: 'email' },
    { inputClass: 'chats-input', inputValue: '1234567890', inputPlaceholder: 'Пароль', inputType: 'password' }
];

const regInputsContext = [
    { inputClass: 'chats-input', inputValue: 'ivan@example.com', inputPlaceholder: 'E-mail', inputType: 'email' },
    { inputClass: 'chats-input', inputValue: 'ivanivanov', inputPlaceholder: 'Логин', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: 'Иван', inputPlaceholder: 'Имя', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: 'Иванов', inputPlaceholder: 'Фамилия', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: '+79099673030', inputPlaceholder: 'Телефон', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: '1234567890', inputPlaceholder: 'Пароль', inputType: 'password' },
    { inputClass: 'chats-input', inputValue: '1234567890', inputPlaceholder: 'Повторите пароль', inputType: 'password' }
];

const searchInputContext = { inputClass: 'chats-input-search', inputValue: '', inputPlaceholder: 'Поиск', inputType: 'text' }

export const authInputs = renderedInput.compileArray(authInputsContext);
export const regInputs = renderedInput.compileArray(regInputsContext);
export const searchInput = renderedInput.compile(searchInputContext);
