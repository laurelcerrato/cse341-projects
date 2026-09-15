const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

//create, post, delete endpoints
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;