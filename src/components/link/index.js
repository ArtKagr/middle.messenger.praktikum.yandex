import renderedLink from './link.js';

const authLinkContext = { className: 'auth-link', linkName: '/registration', targetName: '', text: 'ЕЩЁ НЕ ЗАРЕГИСТРИРОВАНЫ?' };
const regLinkContext = { className: 'auth-link', linkName: '/', targetName: '', text: 'ВОЙТИ' };

export const authLink = renderedLink.compile(authLinkContext);
export const regLink = renderedLink.compile(regLinkContext);
