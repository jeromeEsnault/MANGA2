const Message = require('../../database/models/Message')



module.exports = {


    getPageContact: (req, res) => {
        const sess = req.session;
        res.render('contact', {

            sess: sess,

        })
    },
    createMessageForm: async(req, res) => {
        console.log('Controller Action Formulaire Create message')
        const directeur = "jeromedev@esnault.link",
            infographiste = "jeromedev@esnault.link",
            redacteur = "jeromedev@esnault.link";
        Message.create({

            ...req.body,


        }, (err, data) => {

            console.log(data);
            if (err) console.log(err)

            else {
                const dest = req.body.dest;
                console.log(dest);
                switch (dest) {
                    case 'directeur':
                        console.log('directeur');
                        dest: "jeromedev@esnault.link"
                        break;

                    case 'infographiste':
                        Message.update({ dest: "jeromedev@esnault.link" })
                        break;

                    case 'redacteur':
                        console.log('redacteur');
                        dest: "jeromedev@esnault.link"
                        break;

                    default:
                        dest: "jeromedev@esnault.link"
                        break;
                }


                console.log(data);
                res.redirect(`/contact`)

                console.log('redirection faite');

                console.log('envoie des donner fait');
            }

        })
    },
}