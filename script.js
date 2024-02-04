const input = document.querySelector('#fruit');
input.focus();
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let inputWord = "";

function search(str) {
	let results = [];
	results = fruit.filter((fru) => fru.toLowerCase().includes(str));
	return results
}



function searchHandler(e) {
	inputWord += e.key.toLowerCase();
	showSuggestions(search(inputWord),inputWord);
}

function showSuggestions(results, inputVal) {
	//for each char typed show suggestions for that new string remove old suggestions
	suggestions.innerHTML="";
	
	for (let item of results){
		let newSuggest = document.createElement("li");
		newSuggest.innerText = item;
		suggestions.appendChild(newSuggest);
	}
	if (inputVal === ""){
		suggestions.innerHTML = "";
	}
	//select all of the options

}

function useSuggestion(e) {
	input.value = e.target.innerText;
}

function highlightSuggestion(e){
	e.target.style.background = "orangered";

}

function unhighlightSuggestion(e){
	e.target.style.background = "none";

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', unhighlightSuggestion);