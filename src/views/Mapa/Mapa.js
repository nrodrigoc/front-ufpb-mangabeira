import React from "react";
import "../../assets/css/mapa.css";
import MapeamentoCompleto from "assets/img/rotas/mapeamento-completo.png";
import LegendaCores from "assets/img/rotas/legenda-cores.png";
import LegendaSiglas from "assets/img/rotas/legenda-siglas.png";

function Maps() {
	return (
		<div className="divMapsPage">
			<div className="divMapeamento">
				<div className="divMapa">
					<img
						alt="Mapeamento de Rotas Completo"
						src={MapeamentoCompleto}
						title="Mapeamento de Rotas Completo"
					/>
				</div>
				<div className="divLegendasMapa">
					<div className="divLegendaCores">
						<p>Legenda das Cores</p>
						<img
							alt="Legendas em Cores do Mapeamento de Rotas"
							src={LegendaCores}
							title="Legendas em Cores do Mapeamento de Rotas"
						/>
					</div>
					<div className="divLegendaSiglas">
						<p>Legenda das Siglas</p>
						<img
							alt="Tradução das Siglas do Mapeamento de Rotas"
							src={LegendaSiglas}
							title="Tradução das Siglas do Mapeamento de Rotas"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Maps;
