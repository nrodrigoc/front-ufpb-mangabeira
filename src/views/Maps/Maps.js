import React from "react";
import "../../assets/css/maps.css";
import rotas from "assets/img/rotas-acessiveis/todas-as-rotas.jpg";

function Maps() {
  return(
    <div className="divMapsPage">
      <div className="divMapsTitle">
        <h3>Todas as Rotas</h3>
      </div>
      <div className="divMapsTitle">
        <img src={rotas} alt="Imagem com todas as rotas" />
      </div>
    </div>
  )
}

export default Maps;
