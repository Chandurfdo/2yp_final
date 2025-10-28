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