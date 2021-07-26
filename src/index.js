console.log(data);

// WRITE YOUR CODE BELOW!

// Description
// In this exercise, we're going to create an app to show off our furry friends. 
// This will also let us practice events and forms! This is a combo that you will find all the time out there

// Instructions
// - Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your laptop) => https://codesandbox.io/s/proud-dog-owners-app-template-g30wz?from-embed
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog


// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page


const dogsListEl = document.querySelector(".dogs-list");

const mainSectionEl = document.querySelector(".main__dog-section");


// dog list header

function createDogsList(dogs) {
    
console.log("Inside createDogsList: ", dogs);

    for (let i = 0; i < dogs.length; i++) {

      const dog = dogs[i];
      const name = dog.name;
  
      const listItemEl = document.createElement("li");


      listItemEl.className = "dogs-list__button";
  
      listItemEl.innerText = name;
      listItemEl.addEventListener("click", () => {
        console.log("OnClick inside createDogsList: ", dog);
  
        createMainCard(dog);
      });
  
      console.log(listItemEl);
  
      dogsListEl.append(listItemEl);
    }
}
        createDogsList(data);





        // Main card - name & image

function createMainCard(dog) {
            
console.log("Inside createMainCard: ", dog);
          
mainSectionEl.innerHTML = "";

const headingEl = document.createElement("h2");

headingEl.innerText = dog.name;
          
mainSectionEl.append(headingEl);
          
// ...
}




// function statsFinder(stats) {
//     const cardStats = document.createElement("ul");
    
  
//     for (let i = 0; i < stats.length; i++) {
//       const statName = stats[i].stat.name;

//     }
//     // return cardStats;
//   }


//   function renderDogCards(data) {
//     for (let i = 0; i < data.length; i++) {
   
//         const listOfDogs = data[i];
    
//     cardsElem.append(createDogCard(listOfDogs));

// }
  
// }
//   renderDogsCards(data);

