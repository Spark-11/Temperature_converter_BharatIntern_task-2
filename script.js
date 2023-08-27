let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100
}

    //    Celcius to fahrenheit and kelvin
celciusInput.addEventListener('input' , function(){
    let cel = parseFloat(celciusInput.value)
    let far = (cel*(9/5))+32
    let kel = cel + 273.15

    fahrenheitInput.value = roundNumber(far)
    kelvinInput.value = roundNumber(kel)
})

    //  fahrenheit to celcius and kelvin
fahrenheitInput.addEventListener('input' , function(){
    let far = parseFloat(fahrenheitInput.value)
    let cel = (far -32)*5/9
    let kel = ((far-32)*5/9)+273.15

    celciusInput.value = roundNumber(cel)
    kelvinInput.value = roundNumber(kel)
})

    //   kelvin to celcius and fahrenheit
kelvinInput.addEventListener('input' , function(){
    let kel = parseFloat(kelvinInput.value)
    let cel = kel - 273.15
    let far = ((kel-273.15)*(9/5))+32

    fahrenheitInput.value = roundNumber(far)
    celciusInput.value = roundNumber(cel)
})


      // for reset
btn.addEventListener('click' , ()=>{
    celciusInput.value = ''
    fahrenheitInput.value = ''
    kelvinInput.value = ''
})