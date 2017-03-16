(function(){
  "use strict";

var el_ul = document.getElementById("Spurning1");
var el_spurning = document.getElementById("Spurning");


var teljari = 0;
var haegast = 0;
var laegast = 0;
var stigHaegast = document.getElementById('stig1');
var stiglaegast = document.getElementById('stig2');

var Spurningar = [
    {spurning: "Hvað er 5 * 5?", svarmoguleiki: ["5", "10", "25", "30"], rettSvar: "25"},
    {spurning: "Hvað update er í stýrirkefinu í apple?", svarmoguleiki: ["IOS 10.2.1 ", "IOS 10.2", "iOS 10.1.1"], rettSvar: "IOS 10.2.1"},
    {spurning: "Hvenar kom Counter-Strike: Global offensive út?", svarmoguleiki: ["2012", "2013", "2014"], rettSvar: "2012"},
    {spurning: "Hvenar kom Overwatch út?", svarmoguleiki: ["2012", "2014", "2016", "2017"], rettSvar: "2016"}
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
    el_spurning.innerHTML = "Engar spurningar eftir.";

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
  haegast++;
  fjarlaegja();
  uppfaera();
}

function rangt(){
  teljari++;
  laegast++;
  fjarlaegja();
  uppfaera();
}

function uppfaera(){
  stiglaegast.innerHTML = laegast;
  stigHaegast.innerHTML = haegast;
}

function fjarlaegja(){
  var el_fjarlaegja = document.getElementById("Spurning1");
  while (el_fjarlaegja.firstChild) {
    el_fjarlaegja.removeChild(el_fjarlaegja.firstChild);
  }
  skrifari();
}

skrifari();

})();
