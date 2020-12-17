const Message = require('../../database/models/Message')
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
  

    getPageContact:(req,res)=> {
        res.render('contact', {
            sess: sess,
           
        })
    },
    createMessageForm: async (req, res) => {//ok
      // const mangaExist = await Manga.findById(req.params._id)
      // formulaire 
      console.log('Controller Action Formulaire Create message')

      Message.create({
          ...req.body,
      }, (err, data) => {

          if (err) console.log(err)

          else {
              console.log(data);
              res.redirect(`/contact`)
              console.log('redirection faite');
              console.log(data);

              console.log('envoie des donner fait');
          }
          //  Manga.save((err) => {
          //     if (err) console.log(err);
          // });
      })
  },
}