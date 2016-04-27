score = 0;
function pointGain(){
  score++;
  document.getElementById("correct").innerHTML=score;
}
function pointLoss(){
  if(score != 0){score--;}
  document.getElementById("correct").innerHTML=score;
}
function isCorrect(){
  if (this.value=="correct"){pointGain();}
  else{pointLoss();}

}