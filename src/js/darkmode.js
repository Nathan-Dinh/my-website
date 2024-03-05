const icon = document.getElementById("icon");

icon.onclick = () => {
  const cool = document.getElementsByTagName("html")[0];
  if( "dark" === cool.dataset.theme){
    cool.dataset.theme = "light"
  }else{
    cool.dataset.theme = "dark"
  }
};
