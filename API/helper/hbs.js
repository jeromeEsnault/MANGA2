module.exports = {
    // https://github.com/helpers/handlebars-helpers
    stripTags: function(input) {
        return input.replace(/<(?:.|\n)*?>/gm, '');
    },
    limit: function(arr, limit) {
        if (!Array.isArray(arr)) { //"limit" pour réduire les cards
            return [9];
        }
        return arr.slice(0, limit);
    }
}