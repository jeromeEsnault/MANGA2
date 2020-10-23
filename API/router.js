const express = require('express');
const router = express.Router();

// Controller
//accueil
const homeController = require('./Controllers/home/homeController'), //ok
    //manga
    mangaTestController = require('./Controllers/article/mangaControllerTest'),
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
    .post(mangaTestController.postManga)

router.route('/manga/edit/:id')
    .put(mangaTestController.editID)

router.route('/tome/create')
    .post(mangaTestController.postTome)

router.route('/tome/delete/:id')
    .get(mangaTestController.deleteOneTome)

/*
 * booking
 * ******* */
router.route('/booking')
    .get(bookingController.getBookingPage)

router.route('/booking/:id')
    .get(bookingController.getMangaPageID)
    .delete(bookingController.deleteOne)

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



module.exports = router;