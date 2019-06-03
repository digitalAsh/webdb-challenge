const express = require('express');

const Projects = require('./projectsDb.js');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Projects Router, whoo!')
    next();
  })

router.get('/', async (req, res) => {
  try {  
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({
        message: 'Error retrieving posts'
    });
  }

router.post('/', async (req, res) => {
   const newProject = req.body;
    if(newProject) {
        try {  
            const project = await Projects.insert(req.body);
            res.status(200).json(project);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error adding project' 
        });
    }
    } else {
        res.status(400).json({
            err: 'text property missing'
        });
    }
})
  
});  

module.exports = router;