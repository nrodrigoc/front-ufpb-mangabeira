import routes from "routes";

export const useRouteName = () => {
  let name = "";
  routes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = routes.rtlActive ? "Nome da Rota em Ingles" : route.name;
    }
  });
  return name;
};
