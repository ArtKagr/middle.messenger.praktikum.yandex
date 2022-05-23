import { renderedUser, renderedUserSettings } from './user';
import { state } from '../../../../store';

const userSettingsContext = {
    userClassName: 'chats-menu-settings-user_settings',
    avatarClassName: 'user-avatar',
    contentClassName: 'chats-menu-settings-user-content',
    contentTitleClassName: 'user-title',
    contentTitleText: 'Иван Иванов',
    contentMessageClassName: 'user-message',
    contentMessageText: '+7 (909) 967 30 30',
    userClassSettings: 'user-settings'
};

const usersContext = state.users.map((user) => {
    return {
        userClassName: `chats-menu-settings-user ${state.activeUser === user.id ? '-active' : ''}`,
        avatarClassName: 'user-avatar',
        contentClassName: 'chats-menu-settings-user-content',
        contentTitleClassName: 'user-title',
        contentTitleText: user.name,
        contentMessageClassName: 'user-message',
        contentMessageText: user.message,
        infoClassName: 'flex-column-wrapper',
        infoTimeClassName: 'user-time',
        infoTimeText: user.wasOnline,
        infoNewMessageClassName: `${user.newMessage ? 'user-new_message' : ''}`,
        infoNewMessageText: user.newMessage,
        clickHandler: function () {
            console.warn('userClicked', user)
        }
    }
});

export const userSettings = renderedUserSettings.compile(userSettingsContext);
export const usersArray = renderedUser.compileArray(usersContext);

