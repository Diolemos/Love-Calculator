



function randomPercentageGenerator() {
    let firstPerson = document.getElementById("first-person").value;
    let secondPerson = document.getElementById("second-person").value;


    let result = Math.floor(Math.random() * 100 + 1);

    let resultNode = document.getElementById("result")

    resultNode = resultNode.innerHTML = "This is how much " + firstPerson + " Loves " + secondPerson + " :" + result + "%";



}
