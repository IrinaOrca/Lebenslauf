// example only one button hidden
const button_01 = document.querySelector("#button_02")

button_01.addEventListener("click",function(){
	const experience = document.querySelector("#experience")
	if (experience.classList.toggle("content-hidden")) {
		button_01.textContent = button_01.textContent.slice(0, button_01.textContent.length-1) + "\u25BC";	
	}
	else {
		button_01.textContent = button_01.textContent.slice(0, button_01.textContent.length-1) + "\u25B2";	
	}
})

// example all button hidden
const AllButton = document.querySelectorAll('[data-name="button-title"]')

AllButton.forEach(function(item) {
	item.addEventListener("click", func_hidden)		
})

function func_hidden() {
	if (this.nextElementSibling.classList.toggle("content-hidden")) {
	 	this.getElementsByClassName("button")[0].firstChild.data = this.getElementsByClassName("button")[0].firstChild.data.slice(0, this.getElementsByClassName("button")[0].firstChild.data.length-1) + "\u25BC";	
	}
	else {
		this.getElementsByClassName("button")[0].firstChild.data = this.getElementsByClassName("button")[0].firstChild.data.slice(0, this.getElementsByClassName("button")[0].firstChild.data.length-1) + "\u25B2";	
	}
} 