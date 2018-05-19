let database = [{
  Make: "BMW",
  Model: "540I",
  Hp: 350-400,
  Year: "2001",
},{
  Make: "Mercedez-Benz",
  Model: "E55-AMG",
  Hp: 350-400,
  Year: "2006",
  }]

let searchBar = document.getElementById('search-bar');
let searchButton;= document.getElementById('search-button');
let autoSuggestions;= document.getElementById('search-suggestions');
let display;= document.getElementById('display');

searchBar.addeventListener("keypress", checkKey);


function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13){
    processInput();
  }
}


function processInput() {
  
}
