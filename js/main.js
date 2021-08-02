window.addEventListener('scroll', revealright);

function revealright(){

    var reveals = document.querySelectorAll('.revealright');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activeright');
        }
        else{
            reveals[i].classList.remove('activeright');
        }
    }
}  

window.addEventListener('scroll', revealleft);

function revealleft(){

    var reveals = document.querySelectorAll('.revealleft');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activeleft');
        }
        else{
            reveals[i].classList.remove('activeleft');
        }
    }
}   

// lightMode
var Light =document.getElementById("light");

Light.onclick = function(){
document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
        Light.textContent = 'dark';
    } else{
        Light.textContent = 'light';
    }
}