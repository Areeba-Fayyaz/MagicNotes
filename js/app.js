console.log("hello world");
displaynotes();
// text area
let txt = document.getElementById("addtxt");
console.log(txt);

// addnotebtn
let btn = document.getElementById("addbtn");
console.log(btn);

btn.addEventListener("click", function (e) {
	let notes = JSON.parse(localStorage.getItem("notesobj"));
	if (notes == null) {
		notes = [txt.value];
	} else {
		notes.push(txt.value);
	}
	localStorage.setItem("notesobj", JSON.stringify(notes));
	txt.value = "";
	console.log(localStorage);
	displaynotes();
});

function displaynotes() {
	let cardhtml = " ";
	let mynotes = document.getElementById("notes");

	let notes = JSON.parse(localStorage.getItem("notesobj"));

	console.log(notes, "===========");
	if (notes != null) {
		notes.forEach(function (element, index) {
			console.log(element);
			cardhtml += `<div class="card" style="width: 18rem;">

    <div class="m-3 card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text">${element}</p>
  
      <button id="${index} "onclick="deletenote(
				this.id
			)"  class="btn dltbtn btn-danger">Delete note</button>
    </div>
  </div>`;
		});
		mynotes.innerHTML = cardhtml;
	} else {
		mynotes.innerHTML = "Add a note";
	}
}
function deletenote(index) {
	let dltbtn = document.getElementsByClassName("dltbtn");

	console.log(index, "++++++++++");

	let notes = JSON.parse(localStorage.getItem("notesobj"));
	notes.splice(index, 1);
	localStorage.setItem("notesobj", JSON.stringify(notes));
	displaynotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
	let inputval = searchtxt.value.toLowerCase();
  console.log(inputval);
  
});
