const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// let flecheDroite = 0
// let monBoutonDroit = 0

// monBoutonDroit = document.querySelector(".arrow .arrow_right");
// monBoutonDroit.addEventListener("click", () =>{
// 	console.log("J'ai slide à droite")
// })


// flecheDroite = document.getElementById("#banner");
// flecheDroite.addEventListener("click", () =>{
// 	console.log("J'ai click")
// })

const button = document.querySelector('button')

button.addEventListener("click", function() {
	console.log("Je click")
})