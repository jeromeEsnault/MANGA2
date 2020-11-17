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
   
    //middleware
    upload = require('./middleware/img'), //ok
    uploadArray = require('./middleware/imgarray'),
    auth = require('./middleware/auth'),
   // loginController = require('./Controllers/isVerifAdmin/loginController'),
   // registerController = require('./Controllers/isVerifAdmin/registerController'),
   // logoutController = require('./Controllers/isVerifAdmin/logoutController'),
    authController = require('./Controllers/isVerifAdmin/authController'); //ok


/*
 * Page Home
 * *********** */
router.route('/')
    .get(uploadArray.array('inputArticleArray', 3), homeController.getHomePage)
//.post(uploadArray.array('inputArticleArray', 3), homeController.postCarouselHome)
//.put(uploadArray.array('inputArticleArray', 3), homeController.putCarouselHome)
//.delete(uploadArray.array('inputArticleArray', 3), homeController.deleteOneCarouselHome)



/*********************************** */
/*
 * Page manga
 * *********** */

router.route('/manga')
    // Page de presentation  liste de manga
    .get(auth.auth,mangaController.getMangaPage)

/*
 * page booking pour voir les manga
 * ********************************* */
router.route('/booking')
    .get(bookingController.getBookingPage)

router.route('/booking/:id')
    .get(bookingController.getMangaPageID)
    .delete(bookingController.deleteOne)

/*
 * manga admin
 * ******* */

router.route('/admin')
    .get(adminController.getAdminPage)
//.post(uploadArray.array('inputArticleArray', 3), homeController.postCarouselHome)
//.put(uploadArray.array('inputArticleArray', 3), homeController.putCarouselHome)
//.delete(uploadArray.array('inputArticleArray', 3), homeController.deleteOneCarouselHome)



router.route('/manga/create')
    // Page Formulaire create manga 
    .get(mangaCreateAdminController.getPageFormCreateArticle)
    // Action du Formulaire
    .post(mangaCreateAdminController.createMangaForm)

/******************************************************* */
router.route('/editAdmin/:id')
    //page de tome du manga
    .get(mangaCreateAdminController.getMangaPageID)
    .put(mangaCreateAdminController.editID)

router.route('/modal/:id')
    .post(upload.single('image'), mangaCreateAdminController.createTomeForm)


/******************************************************** */




router.route('/genre/create')
    // Page Formulaire create genre
    .get(mangaCreateAdminController.getPageFormGenre)
    // Ici nous appelons le middleware de multer pour pouvoir traiter notre image dans notre controller
    .post(upload.single('image'), mangaCreateAdminController.createGenreForm)





router.route('/tome/delete/:id')
    .get(mangaController.deleteOneTome)


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


module.exports = router;