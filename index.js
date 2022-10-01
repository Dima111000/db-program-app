require('dotenv').config()
const express = require('express')
const parser = require("body-parser")
const { Sequelize } = require('sequelize')

const app = express()
app.use(parser.urlencoded({extended: true}))
const port = process.env.PORT || 5000

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// })

// const connectDb = async() => {
//     console.log('Проверка запуска БД...')
//
//     try {
//         await sequelize.authenticate();
//         console.log('БД успешно подключена')
//     } catch(e) {
//         console.log('Ощибка подключения БД', e)
//         process.exit(1)
//     }
// }

app.get('/', (req, res) => {
     res.sendFile(__dirname+'/index.html');
})


;(async () => {
    // await connectDb();

    console.log(`Начало запуска сервера на порту ${port}...`);

    app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
})();


