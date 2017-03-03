"use strict";
var teljari = 0;
var Spurningar = [
{
spurning: "Hvað er 5 * 5?",
svarmoguleiki: ["5","10","25","30"],
rettSvar: "25"
},
{
spurning: "Er snjór nuna?",
svarmoguleiki: ["Já","Nei", "???"],
rettSvar: "???"
},
{
spurning: "Hvessu hár var snjórinn 26.2.2017?",
svarmoguleiki: ["30", "50", "51"],
rettSvar: "51"
}
];

var prufa = function(){

  var el_ul = document.getElementById("Spurning1");
  var spurningin = document.getElementById("Spurning");

  spurningin.innerHTML = Spurningar[teljari].spurning;

  shuffleArray(Spurningar[teljari].svarmoguleiki);

  for (var i = 0; i < Spurningar[teljari].svarmoguleiki.length; i++) {
        var el_li = document.createElement("li");
        var el_skrifa = document.createTextNode(Spurningar[teljari].svarmoguleiki[i]);


        el_li.appendChild(el_skrifa);
        el_ul.appendChild(el_li);
  }
  teljari++;
};


function shuffleArray(array) {
 let m = array.length, t, i;
 // While there remain elements to shuffle…
 while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);
 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }
// return array;
}

shuffleArray(Spurningar);
prufa();

