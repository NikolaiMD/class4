var name_local=localStorage.getItem('user');
if(name_local==null){
  var name = prompt("Whats your name?");
  localStorage.setItem('user', name);
}
else{
  alert(`Hi ${name_local}`);
}
