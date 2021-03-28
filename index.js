


function newQuote() {

	function ReverseString(str) {
   return str.split('').reverse().join('')
}

  var x = document.getElementById("inputPassword").value;
  document.getElementById("quotes").innerHTML = ReverseString(x);
}

