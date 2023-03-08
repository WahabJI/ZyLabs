function calcWordFrequencies() {
    
    let input = prompt("Enter a sentence");
    let words = input.split(" ");
    let wordFrequencies = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (wordFrequencies[word]) {
            wordFrequencies[word]++;
        } else {
            wordFrequencies[word] = 1;
        }
    }
    for(let word of words) {
        console.log(`${word} ${wordFrequencies[word]}`);
    }
   
}