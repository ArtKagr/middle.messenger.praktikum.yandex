import layout from './layout/main/index'

import { authInputs, regInputs, searchInput } from "./components/input/index";
import { authButtonFake, regButtonFake, goToChatsButtonFake } from "./components/button";
import { authLink, regLink } from "./components/link";
import { userSettings, usersArray } from "./modules/chats/components/user/index";
import { authWrapper, flexWrapper, chatsWrapperMenu, chatsWrapperMenuSettings, chatsWrapperMenuSettingsUsers, chatsWrapperField } from './components/wrapper/index';

import titles from './components/title/index';

const root = document.querySelector('#root');
root.innerHTML = layout;

const layoutBlock = document.querySelector('.layout');

switch (location.pathname) {
    case '/':
        layoutBlock.innerHTML = authWrapper;
        const authWrapperBlock = document.querySelector('.auth-wrapper');
        authWrapperBlock.innerHTML = [titles.authTitle, authInputs, authButtonFake, authLink].join(' ');
        break
    case '/registration':
        layoutBlock.innerHTML = authWrapper;
        const regWrapperBlock = document.querySelector('.auth-wrapper');
        regWrapperBlock.innerHTML = [titles.regTitle, regInputs, regButtonFake, regLink].join(' ');
        break
    case '/chats':
        layoutBlock.innerHTML = flexWrapper;
        const flexWrapperBlock = document.querySelector('.flex-wrapper');
        flexWrapperBlock.innerHTML = [chatsWrapperMenu, chatsWrapperField].join(' ');
        const chatsWrapperMenuBlock = document.querySelector('.chats-wrapper-menu');
        chatsWrapperMenuBlock.innerHTML = [chatsWrapperMenuSettings, chatsWrapperMenuSettingsUsers].join(' ');
        const chatsWrapperMenuSettingsBlock = document.querySelector('.chats-wrapper-menu-settings');
        chatsWrapperMenuSettingsBlock.innerHTML = [userSettings, searchInput].join(' ');
        const chatsWrapperMenuSettingsUsersBlock = document.querySelector('.chats-wrapper-menu-settings-users');
        chatsWrapperMenuSettingsUsersBlock.innerHTML = usersArray
        break
    default:
        layoutBlock.innerHTML = authWrapper;
        const goToChatsWrapperBlock = document.querySelector('.auth-wrapper');
        goToChatsWrapperBlock.innerHTML= [goToChatsButtonFake].join(' ');
}
