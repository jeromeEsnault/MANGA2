const User = require('../../database/models/User')
const nodemailer = require('nodemailer'),
    // Déclaration ne notre transporter
    // C'est en quelque sorte notre connexion à notre boite mail
    transporter = nodemailer.createTransport({
        pool: true,
        port: 'PORT_URI_MAIL',
        host: 'HOST_URI_MAIL',
        service: 'SERVICE_URI_MAIL',

        auth: {
            user: 'USER_URI_MAIL',
            pass: 'PASS_URI_MAIL'
        }
    })

// Ici on genere nos variable en parent pour pouvoir les récupérer au retour de nos data email
// (Dans la branch nodemailer-advanced il sera générer avec un token type jwt)
var  rand, mailOptions, host, link;

module.exports = {



    sendVerif: (req, res) => {
        // génération d'un chiffre random
        rand = Math.floor((Math.random() * 100) + 54)
        // on definit notre host
        host = req.get('host')
        // on définit le lien
        link = "http://" + req.get('host') + "/verify/" + rand
        // et enfin notre mail
        mailOptions = {
            from: 'USER_URI_MAIL',
            to: req.body.email,
            subject: "Veuillez confirmez votre email svp.",
            rand: rand,
            html: `
            <h2>Encore un effort</h2>,<br>
            <h5>Cliquer sur le lien suivant afin de finir la procédure de validation de mail.</h5><br>
            <a href=" ` + link + ` ">Click here to verify</a>
          `
        }
        console.log(mailOptions)
        // Et envoi notre mail avec nos callback
        transporter.sendMail(mailOptions, (err, res, next) => {
            if (err) {
                console.log(err)
                res.end("error")
            } else {
                console.log("Message Envoyer")
                next()
            }
        })
        // Response
        const sess = req.session
        console.log(sess)
        res.render('contact', {
            sess: sess,
            success: "Un email de vérification à bien été envoyer à " + req.body.email
        })
    }
}