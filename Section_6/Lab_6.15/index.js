function calcWordFrequencies() {
   const words = prompt("enter words");
    const wordArray = words.split(" ");
    const wordFrequency = {};
    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i];
        if (wordFrequency[word]) {
            wordFrequency[word] += 1;
        } else {
            wordFrequency[word] = 1;
        }
    }

    for(let word of wordArray) {
        console.log(word + " " +wordFrequency[word]);
    }


}