const express = require('express');
const router = express.Router();

// Controller
//accueil
const homeController = require('./Controllers/home/homeController'), //ok
    //manga
    mangaController = require('./Controllers/article/mangaController'), //ok
    //contact
    contactController = require('./Controllers/Contact/contactController'), //ok
    //reference
    referenceController = require('./Controllers/Reference/referenceController'), //ok
    //admin
    adminController = require('./Controllers/admin/adminController'), //ok
    // user
    userController = require('./Controllers/user/userController'), //ok
    //book de livre
    bookingController = require('./Controllers/booking/bookingController'); //ok
//middleware
//au
//authAdminController = require('./Controllers/admin/auth');


/*
 * Home
 * **** */
router.route('/')
    .get(homeController.getHomePage)

/*
 * manga
 * ******* */
router.route('/manga')
    // Page Article Website
    .get(mangaController.getMangaPage)

router.route('/manga/create')
    // Page Formulaire create Article
    .get(mangaController.getPageFormCreateArticle)
    // Action du Formulaire
    .post(mangaController.createArticleForm)

router.route('/manga/:id')
    // Page Manga ID
    .get(mangaController.getMangaPageID)
    .delete(mangaController.deleteOne)

/*
 * Contact
 * ********/
router.route('/contact')
    .get(contactController.getContactPage)

/*
 * reference
 * ***********/
router.route('/reference')
    .get(referenceController.getReferencePage)

/*
 * admin
 * ******* */
router.route('/admin')
    .get(adminController.getAdminPage)

/*
 * adminpart
 * ******* */
router.route('/admin')
    .get(adminController.getAdminPart)

/*
 *
 * MODE BETA PAGE
 *
 *************************/

/*
 * user
 * ******* */
router.route('/user')
    .get(userController.getUserPage)

/*
 * booking
 * ******* */
router.route('/booking')
    .get(bookingController.get)

module.exports = router;