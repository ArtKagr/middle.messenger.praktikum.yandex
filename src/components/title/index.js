import renderedTextData from './title.js';

const context = {
    title: {
        auth: { className: 'title-auth', text: 'Авторизация' },
        registration: { className: 'title-auth', text: 'Регистрация' },
        notFound: { className: 'title-error', text: '404' },
        serverError: { className: 'title-error', text: '500' }
    },
    subtitle: {
        notFoundMain: { className: 'subtitle-main', text: 'Такой страницы нет' },
        notFoundSecondary: { className: 'subtitle-secondary', text: 'Возможно она была удалена или перенесена на другой адрес.' },
        serverErrorMain: { className: 'subtitle-main', text: 'У нас проблема' },
        serverErrorSecondary: { className: 'subtitle-secondary', text: 'Мы знаем о проблеме и уже чиним сервис. Скоро все заработает.' }
    }
};

export const title = {
    auth: renderedTextData.pageTitle.compile(context.title.auth),
    registration: renderedTextData.pageTitle.compile(context.title.registration),
    notFound: renderedTextData.pageTitle.compile(context.title.notFound),
    serverError: renderedTextData.pageTitle.compile(context.title.serverError)
};

export const subtitle = {
    notFoundMain: renderedTextData.mainText.compile(context.subtitle.notFoundMain),
    notFoundSecondary: renderedTextData.secondaryText.compile(context.subtitle.notFoundSecondary),
    serverErrorMain: renderedTextData.mainText.compile(context.subtitle.serverErrorMain),
    serverErrorSecondary: renderedTextData.secondaryText.compile(context.subtitle.serverErrorSecondary)
};
