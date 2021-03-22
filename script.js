function changeDiv(){
	document.getElementById("output").innerHTML = cartify(document.getElementById("input").value)
}

function cartify(string){	
	var input = string
	input = input.toLowerCase()
	var words = input.split(" ")
	var cartified = ""
	for (i = 0; i < words.length; i++){
		var rng = Math.floor(Math.random()*4)
		words[i] = words[i].replace("?", " ??? ").replace("!", " ! ")
		var randlen = words[i].length - rng
		if (rng < 2) {
			words[i] = words[i].replace("e", "3").replace('o', '0')
			word_final = words[i].substring(0,1) + words[i].substring(1,words[i].length).toUpperCase()
		} else if (rng == 3) {
			words[i] = words[i].replace('e', 'E').replace('i', '1')
			word_final = words[i].substring(0,randlen) + words[i].substring(randlen,words[i].length).toUpperCase()
		} else{
			word_final = words[i].substring(0,randlen) + words[i].substring(randlen, rng+2).toUpperCase() + words[i].substring(rng+2, words[i].length)
		}
	
		cartified += word_final + " "
		
		emoji = Math.floor(Math.random()* 40)
		if (emoji == 19) {
			cartified += '&#129419; '
		}
		else if (emoji == 18) {
			cartified += '&#129499; '
		}

	}


	return cartified
}

function copyTextFromElement() {
	let element = document.getElementById("output"); //select the element
	let elementText = element.textContent; //get the text content from the element
	copyText(elementText); //use the copyText function below
    alert("Copied the text: " + elementText);
}
function copyText(text) {
	navigator.clipboard.writeText(text);
}
