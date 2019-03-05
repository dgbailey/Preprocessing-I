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
    for(let i =0 ; i < 365 ; i++){
        let heat_sq = document.createElement('div');
        heat_sq.style.height = '1fr';
        heat_sq.style.width = '1fr';
        heat_sq.style.margin= '2px';
        heat_sq.style.backgroundColor= 'lightgray';
        graph.append(heat_sq);
    }
}
populate();
