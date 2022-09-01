// I let the logs information public. feel free to use it
// user: coxobo5626@vasqa.com  pw: coxobo5626@vasqa.com nickname: testAPIomg
// API Keys 6b4058da590fc987d6e791de3d7abe52
// Commands:
// q - specify the city
// appid - specify the API key
// units - chose units for temperature (here it's celsius)


let ville = "Paris"; // default city
recupererMeteo(ville); // in order to have city for the first load without search
// appeler la fonction récupérerTempérature(ville)
let changerVille = document.querySelector('#changer');
changerVille.addEventListener('click', function (){
    ville = prompt('Rechercher une ville..')
    recupererMeteo(ville);
});



function recupererMeteo(ville) {
    const url ='https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=6b4058da590fc987d6e791de3d7abe52&units=metric';
    // cette fois ci il faut mettre la constante url dans la fonction car elle est personnalisée en fonction de la ville
    requete = new XMLHttpRequest();

    requete.open('GET', url)
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200){
                let reponse = requete.response;
                console.log(reponse)
                document.querySelector('#ville').textContent = requete.response.name;
                document.querySelector('#temperature_label').textContent = requete.response.main.temp;
            }
        }
    } 
};
