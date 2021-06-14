const UI_projectName = document.getElementById("project-name"),
    UI_languages = document.getElementById("Languages_utilisés"),
    UI_link = document.getElementById("link"),
    UI_git = document.getElementById("GitHub"),
    UI_describe = document.getElementById("describe"),
    UI_img480 = document.getElementById("img480"),
    UI_img1024 = document.getElementById("img1024"),
    UI_imgDefault = document.getElementById("img-default"),
    UI_mainNav = document.querySelector(".main-nav"),
    UI_symbols = document.querySelectorAll(".main-nav ul li img"),
    UI_nav_links = document.querySelectorAll(".main-nav a"),
    UI_planetCol = document.querySelector(".planet-col"),
    UI_infoCol = document.querySelector(".info-col");

const UI_symbol_array = Array.prototype.slice.call(UI_symbols); // Turning node list of SVG imgs into array
const UI_link_array = Array.prototype.slice.call(UI_nav_links); // Turning nav link node list into array

const planets = [{
    projectName: "Cagnot'Potes",
    languages: "57.9m <abbr>Km</abbr>",
    link: "http://rc-mt-lecteur-audio.projets.simplon-roanne.com/index.php",
    git: "59 Earth gits",
    describe: "106,000 <abbr>mph</abbr>",
    img480: "https://i.postimg.cc/5ykLNr7w/cagnotpote-removebg-preview.png",
    img1024: "https://i.postimg.cc/5ykLNr7w/cagnotpote-removebg-preview.png"
}, {
    projectName: "Yacht Share",
    languages: "108m <abbr>Km</abbr>",
    link: "225 Earth gits",
    git: "116 Earth gits",
    describe: "126 <abbr>Kmh</abbr>",
    img480: "https://i.postimg.cc/TwDgpcSZ/yacht.png",
    img1024: "https://i.postimg.cc/TwDgpcSZ/yacht.png"
}, {
    projectName: "Lecteur Audio",
    languages: "HTML / CSS / JS",
    link: "http://rc-mt-lecteur-audio.projets.simplon-roanne.com/index.php",
    git: "https://github.com/maxime-rgb/Lecteur_audio",
    describe: "Un Lecteur audio permettant d'écouter de la musique de gérer les pistes présentes sur la plateforme ainsi que de trier les titres par genres.Il est aussi possible d'ajouter les titres à une catégorie 'Favoris'. ",
    img480: "https://i.postimg.cc/RCc0Sy89/CE-Lecteur-Audio.png",
    img1024: "https://i.postimg.cc/RCc0Sy89/CE-Lecteur-Audio.png"
}, {
    projectName: "Luxury Services",
    languages: "PHP / TWIG / SYMFONY",
    link: "687 Earth gits",
    git: "24.6 Earth gits",
    describe: "Luxury Services est un site d'annonces d'emplois concernant uniquement des postes de travail dans des milieux luxueux.",
    img480: "https://i.postimg.cc/SsMF7ftC/kyachtingservices.png",
    img1024: "https://i.postimg.cc/SsMF7ftC/kyachtingservices.png"
}, {
    projectName: "Memory Game",
    languages: "778m <abbr>Km</abbr>",
    link: "11.8 Earth links",
    git: "10 Earth Hours",
    describe: "47,000 <abbr>Kmh</abbr>",
    img480: "https://i.postimg.cc/cJFg3VDX/jupiter-trans-480.png",
    img1024: "https://i.postimg.cc/rz2KccmF/jupiter-trans-1024.png"
}, {
    projectName: "Fight Game",
    languages: "1.43b <abbr>Km</abbr>",
    link: "29.5 Earth links",
    git: "10.33 Earth Hours",
    describe: "22,000 <abbr>Mph</abbr>",
    img480: "https://i.postimg.cc/8zV6gdJB/saturn-trans-480.png",
    img1024: "https://i.postimg.cc/MHQvhXzF/saturn-trans-1024.png"
}, {
    projectName: "Projet Hopital",
    languages: "2.87b <abbr>Km</abbr>",
    link: "84 Earth links",
    git: "17.25 Earth Hours",
    describe: "24,500 <abbr>Kmh</abbr>",
    img480: "https://i.postimg.cc/KYG3RZ51/uranus-trans-480.png",
    img1024: "https://i.postimg.cc/tRwv0g3t/uranus-trans-1024.png"
}, {
    projectName: "Drump pad",
    languages: "4.5b <abbr>Km</abbr>",
    link: "165 Earth links",
    git: "16 Earth Hours",
    describe: "19, 500 <abbr>Kmh</abbr>",
    img480: "https://i.postimg.cc/Nj7rsyRh/neptune-trans-480.png",
    img1024: "https://i.postimg.cc/15FCyZMx/neptune-trans-1024.png"
}
];

function displayPlanetInfo(xo) { // Main function, swaps out all content

    setTimeout(function () { // This delaying swapping out content to allow for animated transition before reappearing
        UI_projectName.innerText = planets[xo].projectName;
        UI_languages.innerHTML = planets[xo].languages;
        UI_link.children[0].innerHTML = planets[xo].projectName;
        UI_link.children[0].setAttribute("href", planets[xo].link);
        UI_git.setAttribute("href", planets[xo].git);
        UI_describe.innerHTML = planets[xo].describe;
        UI_img480.setAttribute("srcset", planets[xo].img480);
        UI_img1024.setAttribute("srcset", planets[xo].img1024);
        UI_imgDefault.setAttribute("src", planets[xo].img480);
        UI_planetCol.classList.remove("hide-left");
        UI_infoCol.classList.remove("hide-right");
    }, 1100);
};

UI_mainNav.addEventListener("click", function (e) {
    e.preventDefault();

    if (event.target.tagName != "IMG" && event.target.tagName != "A") { return; }

    else if (event.target.tagName == "IMG") {

        for (i = 0; i < UI_symbol_array.length; i++) {

            UI_symbol_array[i].classList.remove("active"); // removing any .active class on symbol img svgs

            if (UI_symbol_array[i] === event.target) {
                displayPlanetInfo(i); // calling function that matches iteration of symbol, passing in iteration
                hideCols();
                UI_symbol_array[i].classList.toggle("active");
            }
        }
    } else if (event.target.tagName == "A") {

        for (i = 0; i < UI_nav_links.length; i++) {

            UI_symbol_array[i].classList.remove("active"); // removing any .active class on symbol img svgs

            if (UI_symbol_array[i].parentElement === event.target) {
                displayPlanetInfo(i); // calling function that matches iteration of symbol, passing in iteration
                hideCols();
                UI_symbol_array[i].classList.toggle("active");
            }
        }
    } else return;
});

function hideCols() {
    UI_planetCol.classList.add("hide-left");
    UI_infoCol.classList.add("hide-right");
};