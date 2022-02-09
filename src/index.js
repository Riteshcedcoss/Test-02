function myFunction(){
  var name=document.getElementById("name-one").value;
  var exp=/^[a-zA-Z\s]+$/;
  var val = exp.test(name);
  document.getElementById("name-one").style.border="1px solid black";
  document.getElementById("p1").innerText="";
  var mobile = document.getElementById("mobile-number").value;
  document.getElementById("mobile-number").style.border="1px solid black";
  document.getElementById("p2").innerText="";
  if(name == ""){
      document.getElementById("name-one").style.border= "1px solid red";
      document.getElementById("p1").innerText="this field is required!";
  }
  else if(val != true){
      document.getElementById("name-one").style.border= "1px solid red";
      document.getElementById("p1").innerText="name should be string!";
  }
 
  if(mobile.length != 10 ){
    document.getElementById("mobile-number").style.border= "1px solid red";
    document.getElementById("p2").innerText="only 10 digits!";
  }
  else{
  document.getElementById("result").innerHTML=name;
  document.getElementById("result1").innerHTML=mobile;
  }

}