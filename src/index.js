console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


function getDogImage(){
fetch(imgUrl)
.then(res => res.json())
.then(images => {
    console.log(images);
    
    images.message.forEach(imgUrl => {
       const img = document.createElement('img');
       img.src = imgUrl;
       document.querySelector('#dog-image-container').appendChild(img);
    })
 
} )
}
getDogImage();

let dogBreeds = [];
function getDogBreed(breedList){
    
    for (let breed in breedList){
        dogBreeds.push(breed);
    }
    for (let breeds of dogBreeds){
        let ul = document.querySelector('#dog-breeds');
        let li = document.createElement('li')
        li.id= 'dogName';
        li.textContent = breeds;
        ul.appendChild(li);
    }
    document.querySelectorAll('#dogName').forEach(dog => {dog.addEventListener('click', () => dog.style.color = 'red')});
    const breedFilter = document.querySelector('#breed-dropdown');
    
    breedFilter.addEventListener('click', () => {
    const selectedLetter = breedFilter.value;
    filterAndDisplayDogs(selectedLetter);})



}   

fetch(breedUrl)
.then(res => res.json())
.then(data =>{
    console.log(data);
     getDogBreed(data.message)})
.catch(error => console.log(error));


function filterAndDisplayDogs(selectedLetter) {
    const ul = document.getElementById('dog-breeds');
    ul.innerHTML = ''; // Clear the list before re-populating
  
    const filteredBreeds = dogBreeds.filter(breed => {
      return selectedLetter === '' || breed.startsWith(selectedLetter);
    });
  
    filteredBreeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      ul.appendChild(li);
    });
  }




