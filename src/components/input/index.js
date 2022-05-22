import renderedInput from '../input/input';
import { state } from "../../store";

const authInputsContext = [
    { inputClass: 'chats-input', inputValue: state.settings.auth.login, inputPlaceholder: 'E-mail', inputType: 'email' },
    { inputClass: 'chats-input', inputValue: state.settings.auth.password, inputPlaceholder: 'Пароль', inputType: 'password' }
];

const regInputsContext = [
    { inputClass: 'chats-input', inputValue: state.settings.registration.email, inputPlaceholder: 'E-mail', inputType: 'email' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.login, inputPlaceholder: 'Логин', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.first_name, inputPlaceholder: 'Имя', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.second_name, inputPlaceholder: 'Фамилия', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.display_name, inputPlaceholder: 'Отображаемое имя', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.phone, inputPlaceholder: 'Телефон', inputType: 'text' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.password, inputPlaceholder: 'Пароль', inputType: 'password' },
    { inputClass: 'chats-input', inputValue: state.settings.registration.repeat_password, inputPlaceholder: 'Повторите пароль', inputType: 'password' }
];

const searchInputContext = { inputClass: 'chats-input-search', inputValue: '', inputPlaceholder: 'Поиск', inputType: 'text' }

export const authInputs = renderedInput.compileArray(authInputsContext);
export const regInputs = renderedInput.compileArray(regInputsContext);
export const searchInput = renderedInput.compile(searchInputContext);
