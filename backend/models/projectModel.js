const mysql = require('mysql2/promise')

const ProjectModel = {
    getAllProjects: async () => {
      const connection = await mysql.createConnection({
            host: "127.0.0.1",
            user: "CHADO",
            password: "wow",
            database: "portfolio"
      })

        try{
            const [rows, fields] = await connection.execute('SELECT * FROM projects')
            return rows
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            connection.end()
        }
    },
}

module.exports = ProjectModel