function remember() {
  var input = document.getElementsByTagName('input')[0];
  console.dir(input.checked);
  localStorage.setItem('checkbox',input.checked);
}
// Check local storage
function isChecked(){
  var checked = localStorage.getItem('checkbox');
  console.log(checked);
  var input = document.getElementsByTagName('input')[0];
  if(checked=="true"){
    console.log(111);
    input.checked=true;
  }
}
isChecked();
