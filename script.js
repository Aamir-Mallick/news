"use strict";



let input = document.getElementById('search');

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {

    fetchNewsApi(e.target.value);

   }


 })
 
async function fetchNewsApi(fill) {

document.getElementById('loading').style.display = "";

let url = await `https://newsapi.org/v2/everything?q=${fill}&apiKey=ee6b965b04b94b2d8376bfae914af2be`;
const response = await fetch(url);
const data = await response.json();
console.log(data);



 document.getElementById("news-articles").innerHTML =  `

${data.articles.map(function(x) {

     return `
           <div class="article">
              
              <img src="${x.urlToImage}" alt="..." class="article-img"><br/>
              <div class="article-title">${x.title}</div>
              <div class="article-description">${x.description}</div>
              <span class="article-author">${x.author}</span>
              <a class="article-link" href="${x.url}">Go for full article</a>
              
           </div>
 `
    }).join('') }
  
  `


if (data.articles.length === 0) {
   document.getElementsByClassName("not-found")[0].textContent = "No article was found based on the search.";
 }

  input.addEventListener('input', evt => {
  const value = input.value;
 

  if (value == '') {
      
   
      document.getElementsByClassName("not-found")[0].textContent = ""

      fetchNewsApi("apple");
      document.getElementById('loading').style.display = "none";
  } 

})

  document.getElementById('loading').style.display = "none";

}

  fetchNewsApi("apple");

 
