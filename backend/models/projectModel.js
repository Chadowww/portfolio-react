const db = require('../config/database')

const ProjectModel = {
    getAllProjects: async () => {
        const query = `SELECT * FROM projects`
        const result = await db.query(query)
        return result.rows
    },
}

module.exports = ProjectModel