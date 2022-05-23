import renderedChats from './chats';

const chatsContext = {
    wrapper: { className: 'chats' },
    menu: { className: 'chats-menu' },
    menuSettings: { className: 'chats-menu-settings' },
    menuSettingsUsers: { className: 'chats-menu-settings-users' },
    field: { className: 'chats-field' }
}

export default {
    wrapper: renderedChats.compile(chatsContext.wrapper),
    menu: renderedChats.compile(chatsContext.menu),
    menuSettings: renderedChats.compile(chatsContext.menuSettings),
    menuSettingsUsers: renderedChats.compile(chatsContext.menuSettingsUsers),
    field: renderedChats.compile(chatsContext.field)
}
