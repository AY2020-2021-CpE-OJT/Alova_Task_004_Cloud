const express = require('express');
const router = express.Router();
const Phonebook = require('../models/Phonebook');

//GET
router.get('/', async (req,res) => {
    const getPhonebook = await Phonebook.find();
    res.json(getPhonebook);
});

//POST
router.post('/show', async (req,res) =>{
    const newPhonebook = new Phonebook({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber
    });
    const savedPhonebook = await newPhonebook.save();
    res.json(savedPhonebook);
})

//DELETE
router.delete('/delete/:id', async (req,res) =>{
    const deletePhonebook = await Phonebook.findByIdAndDelete({_id: req.params.id});
    res.json(deletePhonebook);
});

//UPDATE
router.patch('/update/:id', async (req,res)=>{
    const updatePhonebook = await Phonebook.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    res.json(updatePhonebook);
});

//GET ONE
router.get('/:id', async(req,res) => {
    const getSpecificPhoneBook = await Phonebook.findById({_id: req.params.id});
    res.json(getSpecificPhoneBook);
});
module.exports = router;