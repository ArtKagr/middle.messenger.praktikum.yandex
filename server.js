const express = require('express');

const app = express();
const PORT = 3000;

const fs = require("fs");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const postcssNested = require('postcss-nested');

const styleSheets = [
    'index.css',
    'assets/styles/components/button.css',
    'assets/styles/components/form.css',
    'assets/styles/components/input.css',
    'assets/styles/components/link.css',
    'assets/styles/components/title.css',
    'assets/styles/modules/header.css',
    'assets/styles/modules/messageField.css',
    'assets/styles/modules/user.css',
    'assets/styles/layout/main.css',
    'assets/styles/pages/chats.css'
]

styleSheets.forEach((link) => {
    let resultLink = link.split('.')
    resultLink[0] = `${resultLink[0]}-node`
    resultLink = resultLink.join('.')
    const styleSheet = fs.readFileSync(link, 'utf8')
    const process = postcss([autoprefixer]).use(postcssNested()).process(styleSheet, { from: `./${link}`, to: `./${resultLink}` })
    fs.writeFile(resultLink, process, 'utf-8', () => {})

    app.get(`/${resultLink}`, (req, res) => {
        res.sendFile(`${__dirname}/${resultLink}`);
    });
})

const scripts = [
    '/src/index.js',
    '/src/layout/main/index.js',
    '/src/layout/main/main.js',
    '/src/layout/main/main.tmpl.js',
    '/src/pages/chats/index.js',
    '/src/pages/chats/chats.js',
    '/src/pages/chats/chats.tmpl.js',
    '/src/modules/chats/components/user/index.js',
    '/src/modules/chats/components/user/user.js',
    '/src/modules/chats/components/user/user.tmpl.js',
    '/src/modules/chats/components/messageHeader/index.js',
    '/src/modules/chats/components/messageHeader/messageHeader.js',
    '/src/modules/chats/components/messageHeader/messageHeader.tmpl.js',
    '/src/modules/chats/components/messageField/index.js',
    '/src/modules/chats/components/messageField/messageField.js',
    '/src/modules/chats/components/messageField/messageField.tmpl.js',
    '/src/components/input/index.js',
    '/src/components/input/input.js',
    '/src/components/input/input.tmpl.js',
    '/src/components/button/index.js',
    '/src/components/button/button.js',
    '/src/components/button/button.tmpl.js',
    '/src/components/title/index.js',
    '/src/components/title/title.js',
    '/src/components/title/title.tmpl.js',
    '/src/components/link/index.js',
    '/src/components/link/link.js',
    '/src/components/link/link.tmpl.js',
    '/src/components/form/index.js',
    '/src/components/form/form.js',
    '/src/components/form/form.tmpl.js',
    '/src/utils/templator.js',
    '/src/utils/get.js',
    '/store/index.js'
]

scripts.forEach((script) => {
    app.get(script, (req, res) => {
        res.sendFile(`${__dirname}${script}`);
    });
})

const routes = ['/', '/registration', '/chats', '/error', '*']

routes.forEach((route) => {
    app.get(route, (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
})

app.listen(PORT)
