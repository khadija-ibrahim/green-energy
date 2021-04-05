const btns = document.querySelectorAll('#controls button');
const container = document.getElementById('loaded-content');

const resource = [
		 {
			headingContent: 'SOLAR ENERGY',
			bodyText: 'Installing Solar panels can absolutely be at a lower price if the materials for the panels were substituted with inexpensive materials such as a silicone called Perovskite. Perovskite is a crystalline material that is inexpensive and easy to produce in the lab. In 2009, scientists showed that perovskites made of lead, iodide and methylammonium could convert sunlight into electricity with an efficiency of 3.8 percent. Since then, researchers have achieved perovskite efficiencies exceeding 20 percent, rivaling commercially available silicon solar cells and spawning widespread interest among silicon manufacturers. - Mark Schwartz, 2015, Precourt Institute for Energy.',
			imgUrl: 'img/solar-image.png',
			imgAlt: 'Solar Panels'
		},
		{
			headingContent: 'WIND ENERGY',
			bodyText: 'A comprehensive survey of the wind industry shows wind energy is routinely purchased in bulk for just two cents per kilowatt an hour and turbines are only getting more affordable, bigger, and better. The report found that U.S. wind energy will continue to be one of the lowest cost electricity generation technologies available, with the long-term wind electricity price available through a power purchase agreement coming in at about half the expected cost of just running a natural gas power plant. - Robert Fares, 2017, Wind Energy Is One of the Cheapest Sources of Electricity, and Its Getting Cheaper, Scientific American',
			imgUrl: 'img/wind-photo.png',
			imgAlt: 'Wind Turbine'
		},
        {
			headingContent: 'HYDROELECTRICITY',
			bodyText: 'Hydropower offers the lowest levelized cost of electricity across all major fossil fuel and renewable energy sources, and costs even less than energy efficiency options, according to a recent study from Navigant Consulting and the American Council on Renewable Energy (ACORE).- National Hydropower Association NHA, 2021',
			imgUrl: 'img/hydro-photo.png',
			imgAlt: 'Water Dam'
		}
];




function preloader() {
        const imagesList = [
           "./img/solar-image.png",
           "./img/wind-photo.png",
           "./img/hydro-photo.png"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
window.addEventListener("load", preloader);

container.innerHTML = `<div class="box">
				         <h2>${resource[0].headingContent}</h2>
				         <img src="${resource[0].imgUrl}" alt="${resource[0].headingContent}">
				         <p>${resource[0].bodyText}</p>
                       </div>`;


 
function handleSelection(e) {
		
	
		for (let i = 0; i < btns.length; i++) {
			if (btns[i].hasAttribute('id')) {
				btns[i].removeAttribute('id');
               
			}
		}

		
		let currentButton = e.target;
		currentButton.setAttribute('id', 'active');

	
        for (let b = 0; b < btns.length; b++) {
			if (btns[b].hasAttribute('id')) {
				container.innerHTML = `<div class="box">
								            <h2>${resource[b].headingContent}</h2>
											 <img class='pic' src="${resource[b].imgUrl}" alt="${resource[b].headingContent}">
											 <p>${resource[b].bodyText}</p>
								        </div>`;
			}
		}

/* 
Close your handleSelection function here. */  
}

 
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', handleSelection);
}