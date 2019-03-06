//fade in skills

window.onscroll = function() {myFunction()};
      
      function myFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("library").id = "slideUp";
        }
      }

//populate heatgraph

let graph = document.querySelector('.graph');


function populate(){
    'use strict';
    for(let i =0 ; i < 380 ; i++){
        let heat_sq = document.createElement('div');
        heat_sq.style.height = '1fr';
        heat_sq.style.width = '1fr';
        heat_sq.style.margin= '2px';
        heat_sq.style.backgroundColor= 'lightgray';
        graph.append(heat_sq);
    }
}
populate();

//HTTP Call to github for commit data
function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
          console.log(xmlHttp.status);
          callback(xmlHttp.responseText);}
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

httpGetAsync('https://api.github.com/repos/dgbailey/Preprocessing-I/stats/commit_activity',x => console.log(x));
//list of all repos
httpGetAsync('https://api.github.com/users/dgbailey/repos',x => console.log(x));
