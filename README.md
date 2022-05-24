<p align="center">
    <img src="https://img.shields.io/badge/express-4.18.1-green" />
    <img src="https://img.shields.io/badge/node-16.0.0-blue" />
    <img src="https://img.shields.io/badge/postcss-8.4.14-ff96b4" />
    <img src="https://img.shields.io/badge/parcel-2.5.0-blue" />
</p>

#Чат
Веб-приложение "Чат", разрабатывается в рамках профессии "Миддл фронтенд-разработчик" Яндекс.Практикума.

## 1 спринт:
* Сверстаны страницы:
  * авторизации: /
  * регистрации: /registration
  * чатов (список и окно активного чата без сообщений): /chats
  * 500: /error
  * 404: любая другая страница

На основе приведенного в теоретической части примера шаблонизатора начал реализовывать
свой. На данный момент структура страницы строится через добавление строк дочерних элементов
в свойство innerHTML родительских. Добавлен файл store для хранения динамических данных и
дальнейшей реализации функционала реактивности.

* Проект разрабатывается с использованием parcel, postcss, express, node

## Команды запуска

```npm run dev``` - dev сборка при помощи parcel на порту 1234

```npm run build``` - build сборка при помощи parcel, используется для деплоя на Netlify

```npm run start``` - запуск express сервера со статикой на 3000 порту

## Figma

```https://www.figma.com/file/8LlwdhYMLkYS1JkfFfYu0T/Спринт-1?node-id=0%3A1```

## Netlify

```https://profound-kashata-b29c20.netlify.app/```

## Pull request:

  * 1 спринт - ``````
