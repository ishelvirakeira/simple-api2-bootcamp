//user enters breed name of a cat and get cat info in the DOM

//listen for click, call the api
//get breed name from user

//display cat info in the DOM: temperament, origin, life-span, description

document.querySelector('button').addEventListener('click', getCat)

function getCat(){
    const breedName = document.querySelector('input').value;
   
    const url= `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

    fetch(url)
        .then(res => res.json())
        .then(data=>{
            console.log(data);

            document.querySelector('h2').innerText=data[0].name; 
            document.querySelector('.origin').innerText= data[0].origin;
            document.querySelector('.lifespan').innerText = data[0].life_span;
            document.querySelector('.temperament').innerText=data[0].temperament;
            document.querySelector('.description').innerText = data[0].description;
        })

        .catch(err=>{
            console.log(`error ${err}`);
            document.querySelector('h2').innerText = 'Something went wrong.'
            
        })

}