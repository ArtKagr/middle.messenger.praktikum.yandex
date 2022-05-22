import layout from "./layout/main/index.js";

import chatsPage from "./pages/chats/index.js";
import { userSettings, usersArray } from "./modules/chats/components/user/index.js";
import messageHeader from "./modules/chats/components/messageHeader/index.js";
import messageField from "./modules/chats/components/messageField/index.js";

import { authInputs, regInputs, searchInput } from "./components/input/index.js";
import { authButtonFake, regButtonFake, goToChatsButtonFake } from "./components/button/index.js";
import { title, subtitle } from "./components/title/index.js";
import { authLink, regLink } from "./components/link/index.js";
import form from "./components/form/index.js";


const root = document.querySelector('#root');

switch (location.pathname) {
    case '/':
        root.innerHTML = layout.flex;
        const authLayout = document.querySelector('.layout');
        authLayout.innerHTML = form;
        const auth = document.querySelector('.form');
        auth.innerHTML = [title.auth, authInputs, authButtonFake, authLink].join(' ');
        break
    case '/registration':
        root.innerHTML = layout.flex;
        const registrationLayout = document.querySelector('.layout');
        registrationLayout.innerHTML = form;
        const registration = document.querySelector('.form');
        registration.innerHTML = [title.registration, regInputs, regButtonFake, regLink].join(' ');
        break
    case '/chats':
        root.innerHTML = layout.block;
        const chatsLayout = document.querySelector('.layout');
        chatsLayout.innerHTML = chatsPage.wrapper;
        const wrapper = document.querySelector('.chats');
        wrapper.innerHTML = [chatsPage.menu, chatsPage.field].join(' ');
        const menu = document.querySelector('.chats-menu');
        menu.innerHTML = [chatsPage.menuSettings, chatsPage.menuSettingsUsers].join(' ');
        const menuSettings = document.querySelector('.chats-menu-settings');
        menuSettings.innerHTML = [userSettings, searchInput].join(' ');
        const menuUsers = document.querySelector('.chats-menu-settings-users');
        menuUsers.innerHTML = usersArray
        const messageFieldBlock = document.querySelector('.chats-field');
        messageFieldBlock.innerHTML= [messageHeader, messageField].join(' ');
        break
    case '/error':
        root.innerHTML = layout.flex;
        const errorPage = document.querySelector('.layout');
        errorPage.innerHTML = form;
        const serverError = document.querySelector('.form');
        serverError.innerHTML= [title.serverError, subtitle.serverErrorMain, subtitle.serverErrorSecondary, goToChatsButtonFake].join(' ');
        break
    default:
        root.innerHTML = layout.flex;
        const notFoundPage = document.querySelector('.layout');
        notFoundPage.innerHTML = form;
        const notFound = document.querySelector('.form');
        notFound.innerHTML= [title.notFound, subtitle.notFoundMain, subtitle.notFoundSecondary, goToChatsButtonFake].join(' ');
}
