let weight = +prompt("enter weight");
let age = +prompt("enter age");

if (!(weight > 50 && time < 4)){
    alert("come to our tryout!");
}
else { 
    alert("come to our cookout!");
}

let x = 10;
let y = 5;

if (x > 5) {
    if (y > 2) {
        console.log("Both x and y are greater than their respective thresholds.");
    } else {
        console.log("x is greater than 5, but y is not greater than 2.");
    }
} else {
    console.log("x is not greater than 5, so the inner condition is not checked.");
}
let temperature = 15;
let isSunny = true;

if(temperature > 25){
  console.log("It's hot outside!");

  if(isSunny){
      console.log("Don't forget to wear sunscreen.");
  }
  else{
    console.log("You might still want to wear sunscreen.");
  }
}
else if(temperature >= 15 && temperature <= 25){
    console.log("It's a pleasant day.");
  if(isSunny){
    console.log("Enjoy the sunshine!");
  }
  else{
    console.log("Even if it's cloudy, it's still nice outside.");
}
}
else{
    console.log("It's a bit chilly.");
    if (isSunny) {
        console.log("Don't be fooled by the sun, it's still cool.");
    } else {
        console.log("It might be cloudy, so bring a jacket just in case.");
    }
}