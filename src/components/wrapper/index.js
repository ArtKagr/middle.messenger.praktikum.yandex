import renderedWrapper from "./wrapper";

// // ------ Context ------ // //

const authWrapperContext = { className: 'auth-wrapper' };

const flexWrapperContext = { className: 'flex-wrapper' };
const flexColumnWrapperContext = { className: 'flex-column-wrapper' };

const chatsWrapperMenuContext = { className: 'chats-wrapper-menu' };
const chatsWrapperMenuSettingsContext = { className: 'chats-wrapper-menu-settings' };
const chatsWrapperMenuSettingsUsersContext = { className: 'chats-wrapper-menu-settings-users' };

const chatsWrapperFieldContext = { className: 'chats-wrapper-field' };

// // ------ Compile ------ // //

export const authWrapper = renderedWrapper.compile(authWrapperContext);

export const flexWrapper = renderedWrapper.compile(flexWrapperContext);
export const flexColumnWrapper = renderedWrapper.compile(flexColumnWrapperContext);

export const chatsWrapperMenu = renderedWrapper.compile(chatsWrapperMenuContext);
export const chatsWrapperMenuSettings = renderedWrapper.compile(chatsWrapperMenuSettingsContext);
export const chatsWrapperMenuSettingsUsers = renderedWrapper.compile(chatsWrapperMenuSettingsUsersContext);

export const chatsWrapperField = renderedWrapper.compile(chatsWrapperFieldContext);
