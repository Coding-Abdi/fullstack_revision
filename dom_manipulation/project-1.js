// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"A rose by any other name would smell as sweet."`,
    person: `William Shakespeare` 
}, {
    quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
    person: `John Kennedy` 
}, {
    quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person: `Thomas Edison` 
}, {
    quote: `"Hell is other people."`,
    person: `Jean-Paul Sartre` 
}, {
    quote: `"I've got a feeling we're not in Kansas anymore."`,
    person: `Dorothy` 
}, {
    quote: `"That's one small step for a man, a giant leap for mankind."`,
    person: `Neil Armstrong` 
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})