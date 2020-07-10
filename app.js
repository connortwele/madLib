console.log('app.js is connected')

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    var wordNine = document.getElementById("textNine").value;
    var wordTen = document.getElementById("textTen").value;
    var wordEleven = document.getElementById("textEleven").value;
    var wordTwelve = document.getElementById("textTwelve").value;

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight,wordNine,wordTen,wordEleven,wordTwelve)

    var paragraph = "<p> Today I went to the zoo. I saw a(n) " + wordOne + ' ' + wordTwo + " jumping up and down in its tree. He " + wordThree + ' ' + wordFour + " through the large tunnel that led to its " + wordFive + ' ' +  wordSix + ". I got some peanuts and passed them through the cage to a gigantic " + wordSeven + " animal towering above my head. Feeding that animal made me hungry. I went to get a " + wordEight + " scoop of ice cream. It filled my stomach. Afterwards I had to " + wordNine + '' + wordTen + " to catch our bus. When I got home I " + wordEleven + " my mom for a " + wordTwelve + " day at the zoo.</p>"

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}