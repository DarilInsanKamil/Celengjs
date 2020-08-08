
function stirngManipulation(word) {
    if (word.charAt(0).match(/[aiueoAIUEO]/)) {
        console.log(word);
    } else {
        var kataBaru = word.slice(1, word.length).concat(word.charAt(0)).concat('nyo');
        console.log(kataBaru);
    }
}
stirngManipulation('ayam');
stirngManipulation('bebek');



/* kesimoulan ch -5 yang tau

.charAt = menegembalikan char ddalam string
.slice = untuk menghilangkan char distring
.concat untuk menambahkan char didepan dalam string
*/