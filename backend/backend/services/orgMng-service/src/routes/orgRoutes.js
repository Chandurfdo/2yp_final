/*
const express  =require("express");
const router = express.Router();

const verifyToken = require('../../../../api-gateway/src/middlewares/verifyToken');


// Import controller functions


const {
    getOrganizers,
    getOrganizerById,
    updateOrganizer,
    deleteOrganizer
} = require('../controllers/orgController');


//  Routs    //

//Get all organizers
router.get('/',getOrganizers);

//Get a single organizer by Id
router.get('/:id',verifyToken,getOrganizerById);


// pUT update organizer
router.put('/:id',verifyToken,updateOrganizer);

//Delete a organizer
router.delete('/:id',verifyToken,deleteOrganizer);


module.exports = router;
*/


const express  =require("express");
const router = express.Router(); // Creates a modular, mini Express app just for defining routes
const verifyToken = require('./verifyToken');
//const verifyToken = require('../../../../api-gateway/src/middlewares/verifyToken');

// Import controller functions

const {
    getOrganizers,
    getOrganizerById,
    updateOrganizer,
    deleteOrganizer,
    //searchOrganizers,
    //searchOrganizersByEmail,

    getNumberById,
    updateNumber

} = require('../controllers/orgController');

//  Routs    //

//Get all organizers
router.get('/',verifyToken,getOrganizers);

//Get a single organizer by Id
router.get('/:id',verifyToken,getOrganizerById);

// pUT update organizer
//router.put('/:id',updateOrganizer);

//Delete a organizer
//router.delete('/:id',deleteOrganizer);

// Apply verifyToken to protected routes
router.put('/:id', verifyToken, updateOrganizer);
router.delete('/:id', verifyToken, deleteOrganizer);

//Get number by ID
router.get('/number/:id', getNumberById);

//PUT number by ID
router.put('/number/:id', updateNumber);

//dynamic search
//router.get("/search-by-email", searchOrganizersByEmail);

module.exports = router;