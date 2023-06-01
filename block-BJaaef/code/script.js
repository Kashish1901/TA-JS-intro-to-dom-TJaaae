      let allPeople = got.houses.reduce((acc , cv) => {
        acc = acc.concat(cv.people);
        return acc;
      } , [])  ;    
      

      let parentELm = document.querySelector('.container');

      console.log(allPeople);

        let cardsHTML = allPeople.map((person) => {
           return `<li class="flex-30">
            <div class="flex">
            <img 
            src= ${person.image}
            alt = ${person.name}
            <h2>${person.name}</h2>
          </div>
           <p>${person.description}</p>
          <button>Learn More!</button>
          </li>`;
        })
parentELm.innerHTML = cardsHTML;
        console.log(cardsHTML);