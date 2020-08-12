const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    // Inserir dados
    proffyValue = {
        name: "Natan Ataide",
        avatar: "https://avatars1.githubusercontent.com/u/38672106?s=460&u=2e9e91d2c304aa4ec6e8e3e7cbbefc7d1d89258f&v=4",
        whatsapp: "81900000000",
        bio: "Instrutor de Matemática",
    }

    classValue = {
        subject: "Matemática",
        cost: "20",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        // class_id virá pelo banco de dados após o cadastro da class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // createProffy(db, {proffyValue, classValue, classScheduleValue})

    //Consultar os dados inseridos
})