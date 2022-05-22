export const state = {
    settings: {
        auth: {
            login: 'ivan@example.com',
            password: '1234567890'
        },
        registration: {
            email: 'ivan@example.com',
            login: 'ivanivanov',
            first_name: 'Иван',
            second_name: 'Иванов',
            display_name: 'Вано',
            phone: '+79099673030',
            password: '1234567890',
            repeat_password: '1234567890'
        },
        avatar: null,
        oldPassword: null,
        newPassword: null,
    },
    activeUser: 5,
    users: [
        { id: 0, name: 'Кондрат', message: 'Ты чего?', newMessage: 1, wasOnline: '21:14' },
        { id: 1, name: 'Frontend news', message: 'Друзья, мы запускаем новую версию продукта', newMessage: 4, wasOnline: '20:01' },
        { id: 2, name: 'Тёща', message: 'А я же говорила...', newMessage: '', wasOnline: '19:55' },
        { id: 3, name: 'Daily M', message: 'Почему вы ещё не создали свою версию', newMessage: '', wasOnline: '16:01' },
        { id: 4, name: 'Встреча выпускников', message: 'Евгений: а может под мост?', newMessage: '', wasOnline: '14:02' },
        { id: 5, name: 'ЯжДизайнер', message: 'Т-текстуры', newMessage: '', wasOnline: '21:13' },
        { id: 6, name: 'Кто-то очень умный', message: 'А как вы хотели', newMessage: '', wasOnline: '21:13' },
        { id: 7, name: 'Job for Middle', message: 'Ищем миддла в команду', newMessage: '', wasOnline: '21:13' },
        { id: 8, name: 'Андрей', message: 'Завтра всё в силе?', newMessage: '', wasOnline: '21:13' },
        { id: 9, name: 'ЯжДизайнер', message: 'Т-текстуры', newMessage: '', wasOnline: '21:13' },
        { id: 10, name: 'Кто-то очень умный', message: 'А как вы хотели', newMessage: '', wasOnline: '21:13' },
        { id: 11, name: 'Английский язык', message: 'Время пришло', newMessage: '', wasOnline: '21:13' },
        { id: 12, name: 'Тёща', message: 'А я же говорила...', newMessage: '', wasOnline: '21:13' },
    ]
}
