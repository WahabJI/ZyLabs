function parseScores(scoresString) {
    // Your code here
    let scoresArray = scoresString.split(' ');
    return scoresArray;
}

function buildDistributionArray(scoresArray) {
    // Your code here
    // tally the scores based on the grade range in the scoresArray
    let grades = [0,0,0,0,0]
    for (let score of scoresArray){
        if(score >= 90)
            grades[0]++;
        else if(score >= 80)
            grades[1]++;
        else if(score >= 70)
            grades[2]++;
        else if(score >= 60)
            grades[3]++;
        else
            grades[4]++;
    }

    // for (let count in grades){
    //     console.log(count + " " + grades[count])
    // }
    return grades;
}

function setTableContent(userInput) {
    // Your code here
    let scoresArray = parseScores(userInput);
    if(scoresArray.length > 0 && (userInput !== "")){
        let grades = buildDistributionArray(scoresArray);
        
        // set the table content
        let innerHTML = '';
        innerHTML += "<tr>";
        for (let count in grades) {
            innerHTML += "<td><div style='height:" + grades[count]*10 + "px' class='bar" + count + "'></div></td>";

        }
        innerHTML += "</tr>";
        //add the second row which has the letter grades
        innerHTML += "<tr>";
        innerHTML += "<td>A</td>";
        innerHTML += "<td>B</td>";
        innerHTML += "<td>C</td>";
        innerHTML += "<td>D</td>";
        innerHTML += "<td>F</td>";
        innerHTML += "</tr>";

        //add the 3rd row which has the number of students in each grade
        innerHTML += "<tr>";
        for (let count in grades) {
            innerHTML += "<td>" + grades[count] + "</td>";

        }
        innerHTML += "</tr>";

        document.getElementById("distributionTable").innerHTML = innerHTML;
}
else{
    document.getElementById("distributionTable").innerHTML = "<td>No graph to display</td>";
}



      
      
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
}