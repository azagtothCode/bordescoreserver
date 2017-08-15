var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 0);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-text").style.display = "none";
  document.getElementById("loader-text-br").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
