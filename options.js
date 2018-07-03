let enableOption = document.getElementById('enableOption');
let saveButton = document.getElementById('saveButton')
let savedP = document.getElementById('savedP')
let tempEnabled = true
document.body.onload = load();
saveButton.onclick = function(){
  save();
  savedP.style.display = "block"
}

function load(){
  tempEnabled = localStorage.getItem('enabled') ? localStorage.getItem('enabled') : true;
  enableOption.checked = tempEnabled;
  console.log(localStorage.getItem('enabled'))
}
function save() {
  localStorage.setItem('enabled',enableOption.checked
}
query = function(){
  console.log(localStorage.getItem('enabled'))
}
setInterval(query,1000);
