require('dotenv').config()
const api_key = process.env.SECRET_KEY


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

const baseAPI= 'https://the-cocktail-db.p.rapidapi.com/search.php?s='
let searchLiquor = document.getElementById('id').value
let fullAPI = baseAPI + searchLiquor


fetch(fullAPI, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    // TODO
    //1. Find drinks by alcohol type
    //2. Get a list of 10 random dranks
    //3. description of alchol chosen