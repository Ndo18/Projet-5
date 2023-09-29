const baseUrl = "./assets/images/slideshow/"
const slides = [
	{
		imageUrl:"slide1.jpg",
		tagLine:"Impressions tous formats",
		details:"en boutique et en ligne",
	},
	{
		imageUrl:"slide2.jpg",
		tagLine:"Tirages haute définition grand format",
		details:"pour vos bureaux et events",
	},
	{
		imageUrl:"slide3.jpg",
		tagLine:"Grand choix de couleurs",
		details:"de CMJN aux pantones",
	},
	{
		imageUrl:"slide4.png",
		tagLine:"Autocollants",
		details:"avec découpe laser sur mesure",
	}
]

let nbSlide = 0

const flecheGauche = document.querySelector(".arrow_left")
const flecheDroite = document.querySelector(".arrow_right")
const bannerImg = document.querySelector(".banner-img")
const slideTitle = document.getElementById("slideTitle")
const slideDescription = document.getElementById("slideDescription")


	 flecheDroite.addEventListener("click", () => {
		nbSlide = (nbSlide +1) % slides.length;
		showSlide(nbSlide)
		console.log(nbSlide)
	 })
	
	function showSlide(index){
		const slide = slides[index]
		if(slide) {
			const imageUrl = baseUrl + slide.imageUrl
			const tagLine = slide.tagLine
			const details = slide.details
			
			bannerImg.src = imageUrl
			slideTitle.textContent = tagLine
			slideDescription.textContent = details
			slideTitle.appendChild(slideDescription)
		} 
		
	}

flecheGauche.addEventListener("click", () => {
	nbSlide = (nbSlide - 1 + slides.length) % slides.length;
		showSlide(nbSlide)
})




/*BULLET POINT*/

let dots = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span")
    dot.classList.add("dot")
    
    dot.addEventListener("click", ()=> {
        nbSlide = i
        showSlide(nbSlide)
    })

    dots.appendChild(dot)
}