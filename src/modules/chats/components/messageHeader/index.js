import renderedMessageHeader from './messageHeader';

const context = {
    messageHeader: 'message-header',
    messageHeaderContent: 'message-header-content',
    messageHeaderContentTitle: 'message-header-content-title',
    messageHeaderContentTitleText: 'Daily M',
    messageHeaderContentMessage: 'message-header-content-message',
    messageHeaderContentMessageText: '35 минут',
    messageHeaderMenu: 'message-header-menu'
};

export default renderedMessageHeader.compile(context);
