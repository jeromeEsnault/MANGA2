const express = require('express');
const router = express.Router();

// Controller
//accueil
const homeController = require('./Controllers/home/homeController'), //ok
    //manga
    mangaTestController = require('./Controllers/article/mangaControllerTest'), //ok
    mangaCreateController = require('./Controllers/article/mangaCreateController'), //ok
    // mangatest = require('./Controllers/article/TEST'),
    genreController = require('./Controllers/genre/genreController'), //ok
    //contact
    contactController = require('./Controllers/Contact/contactController'), //ok
    //reference
    referenceController = require('./Controllers/Reference/referenceController'), //ok
    //admin
    adminController = require('./Controllers/admin/adminController'), //ok
    // user
    userController = require('./Controllers/user/userController'), //ok
    //book de livre
    bookingController = require('./Controllers/booking/bookingController'), //ok
    //modal
    // modalController = require('./Controllers/modal/modalController'), //ok
    //middleware
    upload = require('./middleware/img'); //ok
//authAdminController = require('./Controllers/admin/auth');

/*
 * Home
 * **** */
router.route('/')
    .get(homeController.getHomePage)
    /*********************************** */

/*
 * manga
 * ******* */
router.route('/manga')
    // Page de presentation
    .get(mangaCreateController.getMangaPage)

router.route('/manga/create')
    // Page Formulaire create manga
    .get(mangaCreateController.getPageFormCreateArticle)
    // Action du Formulaire
    .post(mangaCreateController.createMangaForm)

router.route('/tome/create')
    // Page Formulaire create tome
    .get(mangaCreateController.getPageFormTome)
    // Ici nous appelons le middleware de multer pour pouvoir traiter notre image dans notre controller
    .post(upload.single('image'), mangaCreateController.createTomeForm)

router.route('/genre/create')
    // Page Formulaire create genre
    .get(mangaCreateController.getPageFormGenre)
    // Ici nous appelons le middleware de multer pour pouvoir traiter notre image dans notre controller
    .post(upload.single('image'), mangaCreateController.createGenreForm)


/******************************************************* */
router.route('/manga/edit/:id')
    .put(mangaTestController.editID)

/******************************************************** */


router.route('/tome/delete/:id')
    .get(mangaTestController.deleteOneTome)


/***************************************************** */
router.route('/genre')
    // Page genre pour edition
    .get(genreController.getGenrePage)

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