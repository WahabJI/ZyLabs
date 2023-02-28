function calcWordFrequencies() {
    // read the input string from the user
    const words = prompt("Enter a list of words (separated by spaces):");
  
    // split the input string into a list of words
    const wordList = words.split(" ");
  
    // create an empty object to store the word frequencies
    const freq = {};
  
    // iterate over the list of words and count their frequencies
    for (let i = 0; i < wordList.length; i++) {
      const word = wordList[i];
      if (word in freq) {
        freq[word]++;
      } else {
        freq[word] = 1;
      }
    }
  
    // print the word frequencies
    for (let word in freq) {
      console.log(word + " " + freq[word]);
    }
  }
  