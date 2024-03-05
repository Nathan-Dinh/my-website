const ICON = document.getElementById("icon");
const HTML = document.getElementsByTagName("html")[0];

ICON.onclick = () => {
  if( "dark" === HTML.dataset.theme){
    HTML.dataset.theme = "light"
    ICON.src = "./public/dark theme icon/moon.png"
  }else{
    HTML.dataset.theme = "dark"
    ICON.src = "./public/dark theme icon/sun.png"
  }
};
