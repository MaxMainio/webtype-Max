console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

let poemList = [];
let poemCount = 0;


$(document).ready(function(){   

  function getPoem( ){
    
    $('body').addClass('loading');

    $.getJSON("https://www.poemist.com/api/v1/randompoems")
      .done(function( data ) {
          console.log(data);
          poemList = data; // get poem data
          displayPoem(0);  // display first poem
          $('body').removeClass('loading');
        });
  }  
  
  function displayPoem(poemIndex){
    let poem = poemList[poemIndex];
    let author = poem["poet"]; // object with name: nameofauthor, url: urlofauthor

    let text = poem["content"];
    var sentance = text.split(/\n/);
    var words = [];

    for (var i = 0; i < sentance.length; i++) {
      var temp = sentance[i].split(/\s/);
      words.push(temp);
    }

    htmlWrite = "";

    for (var i = 0; i < words.length; i++) {
      htmlWrite = htmlWrite + "<select>";
      for (var j = 0; j < words[i].length; j++) {
        htmlWrite = htmlWrite + "<option>" + words[i][j] + "</option>";
      }
      htmlWrite = htmlWrite + "</select>";
    }

    $('#title').html(poem["title"]);
    $('#author').html('<a href="'+author["url"]+'" target="_blank">'+author["name"]+'</a>');

    $('#append').html('append');
    $('#randomize').html('randomize');
    $('#print').html('print');
    $('#block').html('block');
    $('#refresh').html('refresh');

    $('#poem').append(htmlWrite);
  }

  $("#append").click(function(){

    if( !$('body').hasClass('loading') ){
       // only display poem if JSON from API has fully loaded

       if(poemCount < 4){        
         poemCount ++; // increment poem index until 5
         displayPoem(poemCount);
       }else{
         getPoem(); // get new batch of poems
         poemCount = 0; // reset poem index
       }       
    }
         
  });
  
  getPoem();

  $("#block").click(function(){

    $('select').toggleClass('blockmode');

    if( !$('select').hasClass('blockmode') ){
      !$('select').removeClass('blockmode');
    }else{
      !$('select').addClass('blockmode');
    }
         
  });

  // $("#block").click(function(){

  //   if( !$('body').hasClass('loading') ){
  //      // only display poem if JSON from API has fully loaded

  //      if(poemCount < 4){        
  //        poemCount ++; // increment poem index until 5
  //        displayPoem(poemCount);
  //      }else{
  //        getPoem(); // get new batch of poems
  //        poemCount = 0; // reset poem index
  //      }
  //   }
         
  // });

});