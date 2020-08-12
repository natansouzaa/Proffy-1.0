const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
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

    classScheduleValues = [
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

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultando as classes de um determinado professor e trazendo teus dados
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)
})