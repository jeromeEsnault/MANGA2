 // Method Post
 post: async(req, res) => {
     // On définit query comme un objet acceuillant notre req.params.id
     const query = { _id: req.params.id }

     // On définit nos Objet en relation avec notre commentaire
     // Attention a bien utilisé un nom d'autheur définit dans la db pendant la creation des articles
     const author = await User.findOne({ name: req.body.author })
     const article = await Article.findById(query)

     if (author) {
         // On définit notre construction de Commentaire
         const comment = new Comment({
             content: req.body.content,
             articleID: article._id,
             // Pour l'auteur il serais préférable d'utilisé une session
             author: req.body.author,
             authorID: author._id
         })

         // Ici on incrémente nos commentaire dans nos model en relation
         article.comment.push(comment._id)
         author.comment.push(comment._id)

         // On sauvegarde nous modification
         comment.save((err) => { if (err) return handleError(err) })
         article.save((err) => { if (err) return handleError(err) })
         author.save((err) => { if (err) return handleError(err) })

         // Et on redirige sur notre article parent
         res.redirect(`/article/${article._id}`)
     } else {
         console.log("Votre autheur n'est pas reconnu dans la db !")
         res.send("Votre autheur n'est pas reconnu dans la db ! \n Vous devez utilisez l'author de l'article ou bien creer un nouvel article avec un nouveau nom d'author et vous pourrez ajouter un commentaire avec ce nouvelle user")
     }
 },