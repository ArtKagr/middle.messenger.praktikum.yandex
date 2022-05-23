import renderedButton from './button';
import renderedLink from '../link/link';

const authButtonContext = { className: 'auth-button', text: 'ВХОД' };
const authButtonFakeContext = { className: 'auth-button', linkName: '/chats', targetName: '', text: 'ВХОД' };

const regButtonContext = { className: 'auth-button', text: 'ВХОД' };
const regButtonFakeContext = { className: 'auth-button', linkName: '/', targetName: '', text: 'ЗАРЕГИСТРИРОВАТЬСЯ' };

const goToChatsButtonContext = { className: 'auth-button', text: 'НАЗАД К ЧАТАМ' };
const goToChatsButtonFakeContext = { className: 'auth-button notFound', linkName: '/chats', targetName: '', text: 'НАЗАД К ЧАТАМ' };


export const authButton = renderedButton.compile(authButtonContext);
export const authButtonFake = renderedLink.compile(authButtonFakeContext);

export const regButton = renderedButton.compile(regButtonContext);
export const regButtonFake = renderedLink.compile(regButtonFakeContext);

export const goToChatsButton = renderedLink.compile(goToChatsButtonContext);
export const goToChatsButtonFake = renderedLink.compile(goToChatsButtonFakeContext);
