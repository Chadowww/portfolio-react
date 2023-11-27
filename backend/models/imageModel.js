const mysql = require('mysql2/promise')

const ImageModel = {
    getImageByProjectId: async (id) =>{
        const connection = await mysql.createConnection({
            host: "127.0.0.1",
            user: "CHADO",
            password: "wow",
            database: "portfolio"
        })
        try {
            const [row, fields] = await connection.execute('SELECT image FROM images INNER JOIN projects_images ON images.id = projects_images.image_id WHERE projects_images.project_id = ?' , [id])
            return row
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            connection.end()
        }
    }
}

module.exports = ImageModel