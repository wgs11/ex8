function getStuff(){
  document.getElementById("button").onclick = null;
  document.getElementById("correct").style.visibility = "visible";
  document.getElementById("correct").innerHTML = "0";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
      var xmlDoc = xhttp.responseXML;
      var y = xmlDoc.getElementsByTagName("problem");
      for(a=0; a< y.length;a++) {
        var q = y[a].getElementsByTagName("question");
        var z = y[a].getElementsByTagName("answer");
        var c = y[a].getElementsByTagName("correct");
        for (i = 0; i < q.length; i++) {
          var newdiv = document.createElement("div");
          newdiv.className = "question";
          var textnode = document.createTextNode(q[i].childNodes[0].nodeValue);
          newdiv.appendChild(textnode);
          var selectList = document.createElement("select");
          selectList.class = "select";
          var blankOption = document.createElement("option");
          blankOption.text = 'Please select an option';
          selectList.appendChild(blankOption);
          document.getElementById("demo").appendChild(newdiv);
          for (j = 0; j < z.length; j++){
            var option = document.createElement("option");
            var stuff = z[j].childNodes[0].nodeValue;
            var otherStuff = c[i].childNodes[0].nodeValue;
            if (stuff == otherStuff) {
              option.value = "correct";
            }
            else{
              option.value = "incorrect";
            }
            option.text = stuff;
            selectList.appendChild(option);
            selectList.onchange = isCorrect;
            document.getElementById("demo").appendChild(selectList);
          }
        }
      }
    }
  };
  xhttp.open("GET", "data.xml", true);
  xhttp.send();
}