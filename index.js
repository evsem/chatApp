//Подключаем express
const express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')
//Результат вызова функции express
const app = express()

//Создание протокола; createServer служит для того, чтобы мы могли соединть сам сокет с express
const http = require('http').createServer(app)
//Подключаем сокет; так как io принимкет в себя функцию, то мы можем её вызвать, передав в качестве аргумента данной функции http
const io = require('socket.io')(http)

//Функция для отправки данных
app.get('/', (res, req) => {
  res.sendFile(__dirname + '/index.html')
})

//Откуда по умолчанию брать статитческие файлы
app.use(express(__dirname + '/assets'))

//Функция запуска сервера, первый параметр - порт, второй - callback
http.listen(3000, () => {
  console.log('Сервер запущен.')
})
