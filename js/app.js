let userName = prompt('whats your name')

alert('welcome '+ userName + ' to my website');

console.log('whats your name,' + userName);


let userCountry = prompt('where are you from?')

if (userCountry === 'jordan'){
    alert('now im living in jordan too')
    console.log('where are you from?, '+ userCountry)
}else{
    alert(userCountry + ' is a great country ')
    
    console.log('where are you from?, '+ userCountry)

}

let favSport = prompt('what is the sport do you like most?')

alert(favSport + ' is most practiced in america')

console.log('what is the sport do you like most?,' +favSport)

let userTall = prompt('how tall are you?');

if( userTall > 185){
    alert('you are taller than me im 185 cm')
    console.log('how tall are you?,' + userTall)
}else if( userTall === 185){
    alert('we are the same hights')
    console.log('how tall are you?,' + userTall)
}else{
    alert('im taller than u im 185');
    console.log('how tall are you?,' + userTall)
}

alert ('my name is ' + userName + ' and im from ' + userCountry + ' my favourite sport is ' + favSport + ' and im ' + userTall + ' tall')
