const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const test = filtreManga.getElementById('filterTitlevf'),
    test4 = test.getElementsByTagName('div'),
    test2 = document.getElementsByTagName('div'),
    test3 = document.getElementsByTagName('input');
for (let x = 0; x < test3.length; x++) {
    const testfinal = test3[x];
    console.log(testfinal.value)
}
console.log(testing);
console.log(test1);
console.log(test3);
module.exports = {





}