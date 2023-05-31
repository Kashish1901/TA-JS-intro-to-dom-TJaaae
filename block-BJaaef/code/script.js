

        
        let ul = document.querySelector('ul');

        got.houses.forEach((house) => {
            let li = document.createElement('li');
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src= house.image;
            img.alt = house.name
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let button = document.createElement('button');
            button.innerText = "Learn More!";

            div.append(img , h2);
            li.append(div , p , button);
            ul.append(li);

            console.log(li);
        })