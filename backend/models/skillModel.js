const mysql = require('mysql2/promise');

const SkillModel = {
    getAllSkills: async () => {
        const connection = await mysql.createConnection({
            host: "127.0.0.1",
            user: "CHADO",
            password: "wow",
            database: "portfolio"
        });

        try {
            const [rows] = await connection.execute("SELECT * FROM skills");
            return rows;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            connection.end();
        }
    },

    getAllSkillsWithProjects: async () => {
        const connection = await mysql.createConnection({
            host: "127.0.0.1",
            user: "CHADO",
            password: "wow",
            database: "portfolio"
        });

        try {
            const [rows] = await connection.execute("SELECT project_id, skill_id, projects.name, projects.link FROM projects_skills INNER JOIN skills ON projects_skills.skill_id = skills.id INNER JOIN projects ON projects_skills.project_id = projects.id order by skill_id, project_id");
            return rows;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            connection.end();
        }
    },
};

module.exports = SkillModel;