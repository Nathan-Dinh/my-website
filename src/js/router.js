document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault;
  urlRoute();
});

const urlRoutes = {
  404: {
    page: "/src/pages/404.html",
    title: "404",
    description: "",
  },
  "/": {
    page: "/src/pages/index.html",
    title: "/",
    description: "",
  }
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  let location = window.location.pathname;
  if (location.length === 0 || location === "/index.html") {
    location = "/";
  }
  const route = urlRoutes[location] || urlRoutes[404];
  window.history.pushState({}, "", route.title);

  const html = await fetch(route.page).then((response) => {
    return response.text();
  });
  document.getElementById("root").innerHTML = html
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();
