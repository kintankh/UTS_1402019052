function check() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var result=document.getElementById('result');
  var quiz = document.getElementById("quiz");
  if(q1=="Cedera Kaki"){c++}
  if(q2=="Swab Test"){c++}
  if(q3=="Isolasi Mandiri/WismaAtlet"){c++}
  if(q4=="Kontak person COVID-19"){c++}
  if(q5=="Menerapkan 5M"){c++}

if(c<=2){
alert("Perolehan Skor anda adalah "+c+", Pengetahuan anda masih sangat kurang tentang COVID-19, Mohon untuk mengakses informasi seputar COVID-19 lebih banyak lagi.");
window.location.reload();
}
if(c==3){
alert("Perolehan Skor anda adalah "+c+", Pengetahuan anda sudah cukup tentang COVID-19");
window.location.reload();
}
if(c>=4){
alert("Perolehan Skor anda adalah "+c+", Pengetahuan anda sangat cukup tentang COVID-19");
window.location.reload();
}
}