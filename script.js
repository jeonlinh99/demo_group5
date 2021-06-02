const root = document.querySelector(":root");
const one = document.querySelectorAll('#a');
const two = document.querySelectorAll("#b");
const three = document.querySelectorAll("#c");
// root.style.setProperty("--he","green")
const image = document.querySelectorAll('#im');
const title = document.querySelectorAll('#tt');
for(let i = 0; i < one.length; i++){
    one[i].addEventListener('click', function(){
        root.style.setProperty("--he","#c12930");
        image[i].src = 'red.jpg';
        title[i].style.color = '#fff';
    });
}
for(let i = 0; i < two.length; i++){
    two[i].addEventListener('click', function(){
        root.style.setProperty("--he","#f2f2f2");
        image[i].src = 'white.jpg';
        // title[i].style.color = '#111';
    });
}
for(let i = 0; i < three.length; i++){
    three[i].addEventListener('click', function(){
        root.style.setProperty("--he","#3b3a38");
        image[i].src = 'black.jpg';
        title[i].style.color = '#fff';
    });
}

