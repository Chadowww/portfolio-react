const express = require('express');
const nodemailer = require('nodemailer');
const skill = require('../models/skillModel');
const project = require('../models/projectModel');
const image = require('../models/imageModel')

const router = express.Router();

router.post('/sendmail', async (req, res) => {
    const { email, subject, content } = req.body;
    console.log(email, subject, content);
    const transporter = nodemailer.createTransport({
        host: '127.0.0.1',
        port: 1025,
        secure: false,
    });


    try {
        const info = await transporter.sendMail({
            from: email,
            to: "a.sale@outlook.fr",
            subject: subject,
            text: content,
            html: content,
        });

        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending test");
    }
});

router.get('/skills', async (req, res) => {
    try {
        const skills = await skill.getAllSkills();
        return res.status(200).json(skills);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error getting skills" });
    }
});

router.get('/skills/projects', async (req, res) => {
    try {
        const skills = await skill.getAllSkillsWithProjects();
        return res.status(200).json(skills);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error getting skills" });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await project.getAllProjects();
        res.status(200).send(projects);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting projects");
    }
});
module.exports = router;

router.get('/project/:id', async (req, res) => {
    try {
        const projectContent = await project.getProjectById(req.params.id);
        res.status(200).send(projectContent);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting project");
    }
});

router.get('/images/project/:id', async (req, res) =>{
    try {
        const imgList = await image.getImageByProjectId(req.params.id);
        res.status(200).send(imgList);
    } catch (error){
        console.log(error)
    }
})