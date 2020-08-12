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
        subject: 1,
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

    /*  o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
        o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
        o time_to precisa ser maior
    */
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)
})