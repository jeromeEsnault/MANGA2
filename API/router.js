const express = require('express');
const router = express.Router();


/*
* Appel des  Controller
/**********************/
//accueil
const homeController = require('./Controllers/home/homeController'), //ok

    //manga
    mangaController = require('./Controllers/manga/mangaController'), //ok
    mangaCreateAdminController = require('./Controllers/admin/mangaCreateAdminController'), //ok
    nodemailController = require('./Controllers/Contact/nodemailler'), //ok
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
    //CONNECTION
    authController = require('./Controllers/isVerifAdmin/authController'), //ok
    //middleware
    upload = require('./middleware/img'), //ok
    auth = require('./middleware/auth'),
    /******************************* *
    *    a supprimmer
    /************************* */
    testController = require('./Controllers/filter');


/*
 * Page Home
 * *********** */
router.route('/')
    .get(homeController.getHomePage)
    //.post(uploadArray.array('inputArticleArray', 3), homeController.postCarouselHome)
    //.put(uploadArray.array('inputArticleArray', 3), homeController.putCarouselHome)
    //.delete(uploadArray.array('inputArticleArray', 3), homeController.deleteOneCarouselHome)



/*********************************** */
/*
 * Page manga
 * *********** */

router.route('/manga')
    // Page de presentation  liste de manga
    .get(auth.auth, mangaController.getMangaPage)

/*
 * page booking pour voir les manga
 * ********************************* */
//router.route('/booking')
// .get(auth.auth,bookingController.getBookingPage)

router.route('/booking/:id')
    .get(bookingController.getMangaPageID)
    .delete(auth.auth, bookingController.deleteOne)

/*
 * manga admin
 * ******* */

router.route('/admin')
    .get(auth.isAdmin, adminController.getAdminPage)





router.route('/manga/create')
    // Page Formulaire create manga 
    .get(auth.auth, mangaCreateAdminController.getPageFormCreateArticle)
    // Action du Formulaire
    .post(upload.single('image'), mangaCreateAdminController.createMangaForm)

/******************************************************* */
router.route('/editAdmin/:id')
    //page de tome du manga
    .get(mangaCreateAdminController.getMangaPageID)
    .put(mangaCreateAdminController.editID)

router.route('/modal/:id')
    .post(upload.single('image'), mangaCreateAdminController.createTomeForm)


/******************************************************** */






router.route('/tome/delete/:id')
    .get(mangaController.deleteOneTome)


/***************************************************** */
//router.route('/genre')
// Page genre pour edition
// .get(genreController.getGenrePage)


/***************************************************** */
/*
 * Contact
 * ********/
router.route('/contact')
    .get(contactController.getPageContact)
    .post(contactController.createMessageForm)



// Nodemailer
// email test
router.route('/nodemailerTest')
    .post(nodemailController.test)
    // email de verification
router.route('/verification')
    .post(nodemailController.sendVerif)
    // Page de vérification
router.route('/verify/:id')
    .get(nodemailController.verifMail)

/****************************************************** */

/*
 * reference
 * ***********/
router.route('/reference')
    .get(referenceController.getReferencePage)





/*
 * user
 * ******* */
router.route('/user')
    .get(userController.getUserPage)

//****************************** */

/*
 *
 *  PAGE authentification
 *
 *************************/
router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)

router.route('/logout')
    .get(authController.logout)
router.route('/test')
    .get(testController.filtre)
module.exports = router;