function magicFunction() {
  console.log('abracadabra');
}

let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');

car1.style.marginLeft = '0';
car2.style.marginLeft = '0';

// magicFunction();

window.onload = function () {
  let button = document.querySelector('#start-race-btn');

  button.addEventListener('click', function () {
   
   car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px'; 
   
   car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px'; 

  //  marginLeft = marginLeft + random;

  if (parseInt(car1.style.marginLeft) > window.innerWidth) {
    alert ('Carro 1 ganhou');
    car1.style.marginLeft = '0';
    car2.style.marginLeft = '0';
    
  }

  
  if (parseInt(car2.style.marginLeft) > window.innerWidth) {
    alert ('Carro 2 ganhou');
    car1.style.marginLeft = '0';
    car2.style.marginLeft = '0';
    
  }
 
  } );


  
};


