console.log('JS OK!')

/* 1. Partendo dalla struttura dati fornita, 
visualizzare in pagina un box per ogni icona,
in cui è presente il nome dell'icona e l'icona stessa.*/

/* 2.  Ciascuna icona ha una proprietà "color": 
utilizzare questa proprietà per visualizzare le
icone del colore corrispondente.*/

/* 3.  Aggiungere alla pagina una select in cui le 
options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l'utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti.*/

// creo un array con tutte le icone scritte già nel data.js

const iconsGroup = [
    // gatto
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    //
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    // cane
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    //
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    //drago
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    // cavallo
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    // ippopotamo
    {
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    // pesce
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
    },
    
    // carota
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
    },
    
    // mela
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
    },
    
    // lione
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
    },
    
    //peperoncino
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
    },
    
    // user
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

