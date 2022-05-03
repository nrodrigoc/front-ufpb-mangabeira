import React from "react";
import "../../assets/css/mapa.css";
import MapeamentoCompleto from "assets/img/rotas/mapeamento-completo.png";

function Maps() {
  return(
    <div className="divMapsPage">
      <div className="divMapa">
        <img src={MapeamentoCompleto} />
      </div>
    </div>
  )
}

export default Maps;
