<script>
    document.getElementById("areaFormContact").addEventListener("click",
        function (event) {
            CKEDITOR.replace('areaFormContact', {
                language: 'fr',
                //uiColor : '#AADC6E',
                // Ne prens pas en compte les entités HTML comme &nbsp,&amp...
                entities: false,
                basicEntities: false,
                //Masque la barre de tache de Ckeditor
                toolbarCanCollapse: true,
                toolbarStartupExpanded: true,
                //prend les paramettre de mon CSS
                contentsCss: '/assets/css/style.css',
                //Chnage la barre de tache et garde juste Bold et Italic 
                toolbar: 'Custom',
                toolbar_Custom: [['Bold', '-', 'Italic', '-']],
            });
            //enleve le code dans la barre de tache du bas
            CKEDITOR.config.removePlugins = 'elementspath';
        }
    )
</script>
stripTags: function (input) {
    str = input
    strEmpty = ""
    if (str === undefined) {
        return strEmpty
    } else {
        // remplace tout les caractere par " "
        return str.replace(/<(?:.|\n)*?>/gm, '')
    }
}

<area>{{{contentMessage}}}</area> // pour afficher dans un area comme l'exemple sans les balises