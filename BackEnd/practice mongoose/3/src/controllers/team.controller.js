const express = require('express');
const router = express.Router();

const Team = require('../models/team.model')

router.get('/home', async (req, res) =>{
    try {
        return res.render('home');

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get('/members', async (req, res) =>{
    try {
        let team = await Team.create(req.body);
        return res.status(201).send(team);
        return res.render('allTeamMembers', {
            team: team
        });

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get('/create', async (req, res) =>{
    try {
        return res.render('addTeamMember');

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.post('', async (req, res)=>{
    let team = await Team.create(req.body);
    return res.status(201).send(team);
})

module.exports = router;