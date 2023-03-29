console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

var loadingMark = document.getElementById('loading-mark');
var firstIndex = document.getElementById('first-index');

const poemSpace = document.getElementById('poem-space');
const indexList = document.getElementById('index');

var poemList = [];
var poemCount = 0;









window.onload = (event) => {
  getPoem();
}









function getPoem() {
  fetch('https://maxmainio.github.io/webtype-Max/projects/p4v3/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
      shuffle(json);
      poemList = json;
      displayPoem(0);

      loadingMark.classList.remove('loading');
      firstIndex.remove();
    });
}









function displayPoem(poemIndex){
  let poem = poemList[poemIndex];

  let author = poem['poet'];
  let text = poem['content'];
  var phrase = text.split(/\n/);
  var words = [];

  for (var i = 0; i < phrase.length; i++){
    var temp = phrase[i].split(/\s/);
    words.push(temp);
  }

  poemWrite = '';

  for (var i = 0; i < words.length; i++){
    poemWrite = poemWrite + '<select>';
    for (var j = 0; j < words[i].length; j++){
      poemWrite = poemWrite + '<option>' + words[i][j] + '</option>';
    }
    poemWrite = poemWrite + '</select>';
  }

  // var poemDiv = document.createElement('div');
  // poemDiv.setAttribute('class', 'chain');
  // poemDiv.setAttribute('data-poem', poem['title']);
  // poemDiv.insertAdjacentHTML('beforeend', poemWrite);
  // poemSpace.appendChild(poemDiv);

  poemSpace.insertAdjacentHTML("beforeend", poemWrite);
  updateIndex(author, poem, poemIndex);
}









function updateIndex(author, poem, poemIndex){
  var authorCard = document.createElement('div');
  authorCard.setAttribute('class', 'author');
  authorCard.setAttribute('data-poem', poem['title']);

  var poemIndex = poemIndex + 1;

  authorCard.innerHTML = '<p><a href="' + author['url'] + '" target="_blank">' + author['name'] + '</a></p><p>' + poemIndex + '</p>'

  indexList.appendChild(authorCard);
}









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









function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}