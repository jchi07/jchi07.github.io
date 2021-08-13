/* .js files add interaction to your website */
var factList = [
  "Companies that are gender and ethnically diverse outperform their peers",/*0*/
  "Men are not viewed as the “enemy” by proponents of gender equality principles. They can take an active part in this debate",/*1*/
  "On average, women make up about 43 percent of the agricultural labour force in developing countries",/*2*/
  "Worldwide, nearly 1 in 4 girls between the ages of 15 and 19 are neither employed nor in education or training – compared to 1 in 10 boys."/*3*/
];

/*define the variables*/
  var fact = document.getElementById("fact");
  var factBtn = document.getElementById("factBtn");
  var count = 0;

if(factBtn) {
  factBtn.addEventListener("click", displayFact);
}

/*function definition*/
 function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
