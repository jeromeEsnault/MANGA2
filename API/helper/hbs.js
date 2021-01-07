module.exports = {
    // https://github.com/helpers/handlebars-helpers
    stripTags: function(input) {

        str = input
        strEmpty = ""
        if (str === undefined) {
            return strEmpty
        } else {
            // remplace tout ces caractere par " "
            return str.replace(/<(?:.|\n)*?>/gm, '')
        }
    },

    limit: function(arr, limit) {
        if (!Array.isArray(arr)) { //"limit" pour réduire les cards
            return [9];
        }
        return arr.slice(0, limit);
    }
}