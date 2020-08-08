function stirngManipulation(word) {
    if (word.charAt(0).match(/[aiueoAIUEO]/)) {
        return (word);
    } else {
        var newWord = word.slice(1, word.length).concat(word.charAt(0)).concat('nyo');
        return newWord;
    }
}

function sentenceManipulation(sentence) {
    var arraySentence = sentence.split("");
    for (var i = 0; i < arraySentence.length; i++) {
        arraySentence[i] = stirngManipulation(arraySentence[i]);
    }
    var newSentence = arraySentence.toString().replace(/,/g, "");
    console.log(newSentence);
}

sentenceManipulation('ibu pergi ke pasar bersama aku');


/*
.split = untuk membalikan kalimat

*/