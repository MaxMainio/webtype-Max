console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

window.onload = (event) => {
  getPoem();
}

function getPoem() {
  fetch('https://maxmainio.github.io/webtype-Max/projects/p4v3/sources/data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
}














// let poemList = [];
// let poemCount = 0;


// $(document).ready(function(){

//   function getPoem(){
    
//     $('header').addClass('loading');

//     $.getJSON("https://www.poemist.com/api/v1/randompoems")
//       .done(function( data ) {
//           console.log(data);
//           poemList = data; // get poem data
//           displayPoem(0);  // display first poem
//           $('header').removeClass('loading');
//         });
//   }  
  
//   function displayPoem(poemIndex){
//     let poem = poemList[poemIndex];
//     let author = poem["poet"]; // object with name: nameofauthor, url: urlofauthor




//     let text = poem["content"];
//     var sentance = text.split(/\n/);
//     var words = [];

//     for (var i = 0; i < sentance.length; i++) {
//       var temp = sentance[i].split(/\s/);
//       words.push(temp);
//     }

//     poemWrite = "";

//     for (var i = 0; i < words.length; i++) {
//       poemWrite = poemWrite + "<select>";
//       for (var j = 0; j < words[i].length; j++) {
//         poemWrite = poemWrite + "<option>" + words[i][j] + "</option>";
//       }
//       poemWrite = poemWrite + "</select>";
//     }




//     $('#title').html(poem["title"] + ' ' + '<a href="'+author["url"]+'" target="_blank">'+author["name"]+'</a>');
//     $('#author').html('<a href="'+author["url"]+'" target="_blank">'+author["name"]+'</a>');

//     $('#poem').append(poemWrite);
//     $('#index').html(poemCount +1)
//   }

//   $("#append").click(function(){

//     if( !$('header').hasClass('loading') ){
//        // only display poem if JSON from API has fully loaded

//        if(poemCount < 4){        
//          poemCount ++; // increment poem index until 5
//          displayPoem(poemCount);
//        }else{
//          getPoem(); // get new batch of poems
//          poemCount = 0; // reset poem index
//        }       
//     }
         
//   });
  
//   getPoem();

//   $("#block").click(function(){

//     $('select').toggleClass('blockmode');

//     if( !$('select').hasClass('blockmode') ){
//       !$('select').removeClass('blockmode');
//     }else{
//       !$('select').addClass('blockmode');
//     }
         
//   });

// });