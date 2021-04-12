function displayCat(category) {
    if (category==randomFact()) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myJSON = JSON.parse(this.responseText);
                document.getElementById("result").innerHTML = "<blockquote>" + myJSON['value'] + "</blockquote>";
            }
        };
        xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
        console.log(xmlhttp);
        xmlhttp.send();
        // return;
    } else {
        var categoryLower = category.toLowerCase();
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myJSON = JSON.parse(this.responseText);
                document.getElementById("result").innerHTML = "<blockquote>" + myJSON['value'] + "</blockquote>";
            }
        };
        xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random?category=" + categoryLower, true);
        console.log(xmlhttp);
        xmlhttp.send();
    }
}
function randomFact() {
   // We call the Web Service via AJAX
   var xmlhttp = new XMLHttpRequest();
   var url = "https://api.chucknorris.io/jokes/random";
   xmlhttp.onreadystatechange = function() {
     if(this.readyState == 4 && this.status == 200) {
       var json = JSON.parse(this.responseText);
       // We parse the JSON response
       parseJson(json);
     }
   };

   xmlhttp.open("GET", url, true);
   xmlhttp.send();
 }

 function parseJson(json) {
   var fact = "<blockquote>" + json["value"] + "</blockquote>";
   document.getElementById("result").innerHTML = fact;
 }

 // Finally we add a click event listener on the logo of Chuck Norris
 // to load a new random fact when the user will click on it
 document.getElementById("New-Joke").addEventListener("click", function() {
   randomFact();
 });

 randomFact();
