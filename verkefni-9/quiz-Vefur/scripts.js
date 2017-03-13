(function(){
  "use strict";

var el_ul = document.getElementById("Spurning1");
var el_spurning = document.getElementById("Spurning");


var teljari = 0;
var plus = 0;
var minus = 0;
var min = document.getElementById('score2');
var add = document.getElementById('score1');

var Spurningar = [
    {spurning: "Hvað er 5 * 5?", svarmoguleiki: ["5", "10", "25", "30"], rettSvar: "25"},
    {spurning: "Hvað er nýjasti síminn hjá google?", svarmoguleiki: ["Pixel", "iOS 10", "Nokia 3310"], rettSvar: "Pixel"},
    {spurning: "Hvort er þessi spurning rétt eða röng?", svarmoguleiki: ["Rétt", "Röng", "????"], rettSvar: "????"},
    {spurning: "Hvað er fjórða plánetan í sólkerfinu okkar?", svarmoguleiki: ["Jörðin", "Venus", "Merkúríus", "Mars"], rettSvar: "Mars"}
  ];

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
   return array;
  }

shuffleArray(Spurningar);

 function skrifari(){
  if (Spurningar.length <= teljari) {
    el_spurning.innerHTML = "Spurningarnar eru búnar!";

  }
  else {
   
    shuffleArray(Spurningar[teljari].svarmoguleiki);
    
    el_spurning.innerHTML = Spurningar[teljari].spurning;
    for (var i = 0; i < Spurningar[teljari].svarmoguleiki.length; i++) {
          var el_li = document.createElement("li");
          
          if (Spurningar[teljari].svarmoguleiki[i] === Spurningar[teljari].rettSvar) {
            el_li.addEventListener('click',rett,false);
          }
          
          else {
            el_li.addEventListener('click',rangt,false);
          }
          var el_skrifa = document.createTextNode(Spurningar[teljari].svarmoguleiki[i]);
          el_li.appendChild(el_skrifa);
          el_ul.appendChild(el_li);
    }
  }
}


function rett(){
  teljari++;
  plus++;
  fjarlaegja();
  uppfaera();
}

function rangt(){
  teljari++;
  minus++;
  fjarlaegja();
  uppfaera();
}

function uppfaera(){
  min.innerHTML = minus;
  add.innerHTML = plus;
}

function fjarlaegja(){
  var myNode = document.getElementById("Spurning1");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  skrifari();
}

skrifari();

})();