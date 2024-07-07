var requestURL = "person.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
	const data = request.response;
};

// import data_ from './static/json/person.json' assert { type: 'json' };
// console.log(data_);

let data_ = [
    {
        "link_photo": "no_name.jpg",
        "name": "Unknown_",
        "date_of_birth": "01.01.1980",
		"family_status": "-",
		"nationality": "marsianin",	
		"email": "unknown_01011980@gmail.com",
		"phone": "+49 160 000 00 000",
		"GitHub": "https://github.com/",
		"address": "Deutschland"
    },
    {
        "experience": [
            {
                "period": "2022 –",
                "name": "Goodle",
                "tasks": ["beraten"]
            },
            {
                "period": "2020 – 2022",
                "name": "Microsoft",
                "tasks": [
                    "leiten",
                    "beraten",
					"Tee trinken",
					"schlaffen"
				]
            },
            {
				"period": "2015 - 2020",
				"name": "IBM",
				"tasks":[
					"sitzen"
				]
			},
            {
				"period": "2010 - 2015",
				"name": "Open AI",
				"tasks":[
					"stehen"
				]
			},
            {
				"period": "2005 - 2010",
				"name": "AMD",
				"tasks":[
					"fliegen"
				]
			},
            {
				"period": "2000 – 2010",
				"name": "Audi",
				"tasks": [
					"testen"
				]
			}
        ]
    },
    {
        "education": [{
			"period": "1995 – 2000",
			"link_education": "https://www.fu-berlin.de/en/index.html",
			"name": "Freie Universität Berlin",
			"faculty": "Fachrichtung: Management"
		}]
    },
    {
        "knowledge": [{
			"key":"Software:",
			"name": ["MS Office"]	
		}, 
		{
			"key":"Sprachen:",
			"name": ["Deutsch – Muttersprache, Englisch – Intermediate","Spanisch"]
		}]
    }
];


// Persönliche Daten
document.getElementById("link_photo").src=data[0].link_photo;
document.getElementById("pd_name").innerHTML = data[0].name;
document.getElementById("pd_date_of_birth").innerHTML = data[0].date_of_birth;
document.getElementById("pd_family_status").innerHTML = data[0].family_status;
document.getElementById("pd_nationality").innerHTML = data[0].nationality;
document.getElementById("pd_email").innerHTML = data[0].email;
document.getElementById("pd_email").href = "mailto:" + data[0].email;
document.getElementById("pd_phone").innerHTML = data[0].phone;
document.getElementById("pd_GitHub").innerHTML = data[0].GitHub;
document.getElementById("pd_GitHub").href = data[0].GitHub + "?tab=repositories";
document.getElementById("pd_address").innerHTML = data[0].address;

// Berufserfahrung
for (let i = 0; i < data[1].experience.length; i++) { 
	document.getElementById("experience_period").innerHTML = data[1].experience[i].period;

	var ul = document.getElementById("experience_name");
	ul.innerHTML = data[1].experience[i].name;

	for (let j = 0; j < data[1].experience[i].tasks.length; j++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(data[1].experience[i].tasks[j]));
		ul.appendChild(li);	
	}	

	let ob = document.querySelector("#experience").appendChild(document.querySelector("#experience_row").cloneNode(true));
	ob.classList.remove("content-hidden");	

} 

// Bildung
for (let i = 0; i < data[2].education.length; i++) { 
	
	document.getElementById("education_period").innerHTML = data[2].education[i].period;
	document.getElementById("education_name").innerHTML = data[2].education[i].name;
	document.getElementById("education_name").href = data[2].education[i].link_education;
	document.getElementById("education_faculty").innerHTML = data[2].education[i].faculty;

	let ob = document.querySelector("#education").appendChild(document.querySelector("#education_row").cloneNode(true));
	ob.classList.remove("content-hidden");	

} 

// Kenntnisse
for (let i = 0; i < data[3].knowledge.length; i++) { 
	
	// create new section
	let ob = document.querySelector("#knowledge").appendChild(document.querySelector("#knowledge_row").cloneNode(true));
	// make visible
	ob.classList.remove("content-hidden");	
	// fil key	
	ob.querySelector("#knowledge_key").innerHTML = data[3].knowledge[i].key;
	// add names
	var ul = ob.querySelector("#knowledge_name");

	for (let j = 0; j < data[3].knowledge[i].name.length; j++) {
		var li = document.createElement("p");
		li.appendChild(document.createTextNode(data[3].knowledge[i].name[j]));
		li.classList.add("container-col-p");
		ul.appendChild(li);	
	}	

} 

