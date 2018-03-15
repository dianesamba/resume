function loadJSON(url){
  return new Promise( (resolve, reject) => {
    return fetch(url).then( response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error - unable to load JSON'));
      }
    })
  })
}

var myPromise = loadJSON("api-data/data.json");

myPromise.then( data => {
  console.log(data);
  career(data.career);
} );
var content=document.querySelector(".content");
function career(file){
  var h2=document.createElement("h2");
  h2.textContent="career objective";
  content.appendChild(h2);
}
