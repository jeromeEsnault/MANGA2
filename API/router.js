const express = require('express');

const router = express.Router();

// Controller
//accueil
const homeController = require('../API/Controllers/home/homeController'),
    //article
    articleController = require('../API/Controllers/article/articleController'),
    //contact
    contactController = require('../API/Controllers/Contact/contactController'),
    //reference
    referenceController = require('./Controllers/Reference/referenceController'),
    //admin
    adminController = require('./Controllers/admin/adminController'),
    //partie du admin
    adminpartController = require('../API/Controllers/admin/adminpartController'),
    // utilisateur
    userController = require('../API/Controllers/user/userController'),
    //book de livre
    bookingController = require('../API/Controllers/booking/bookingController')

// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)

// Contact
router.route('/contact')
    .get(contactController.get)

// reférence
router.route('/reference')
    .get(referenceController.get)

// admin
router.route('/admin')
    .get(adminController.get)

// adminpart
router.route('/adminpart')
    .get(adminpartController.get)

// user
router.route('/user')
    .get(userController.get)

// booking
router.route('/booking')
    .get(bookingController.get)

module.exports = router;