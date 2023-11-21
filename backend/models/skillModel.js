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
};

module.exports = SkillModel;
