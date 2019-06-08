const express = require('express');

const Actions = require('./actionsDb.js');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Action Router, whoo!')
    next();
  })

router.get('/', async (req, res) => {
  try {  
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (err) {
    console.log(err);
    res.status(500).json({
        message: 'Error retrieving action'
    });
  }

router.post('/', async (req, res) => {
   const newAction = req.body;
    if(newAction) {
        try {  
            const action = await Actions.insert(req.body);
            res.status(200).json(action);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error adding action' 
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

