/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link'); // recupérer les liens

function colorLink(){ //fonction pour ajouter et retirer class
	linkColor.forEach(l => l.classList.remove('active-link')); //
	this.classList.add('active-link');
}

linkColor.forEach(l => l.addEventListener('click', colorLink)); // pour chaque lien ajouter l'event click et executer la fonction


/* SHOW/HIDE MENU */
const showMenu = (toggleId, navbarId) =>{
	const toggle = document.getElementById(toggleId),
		navbar = document.getElementById(navbarId);

	if(toggle && navbar){
		toggle.addEventListener('click', ()=>{
			navbar.classList.toggle('show-menu'); // faire apparaitre le menu
			toggle.classList.toggle('rotate-icon'); // faire tourner l'icone
		});
	};
};
showMenu('nav-toggle','nav'); // récupérer les ID