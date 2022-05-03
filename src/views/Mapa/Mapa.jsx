import React, { useEffect } from "react";
import "../../assets/css/mapa.css";

// Imagens dos Mapeamentos
import MapeamentoCompleto from "assets/img/rotas/mapeamento-completo.png";

// Imagens das Legendas
import LegendaCores from "assets/img/rotas/legenda-cores.png";
import LegendaSiglas from "assets/img/rotas/legenda-siglas.png";

// Material UI Components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Icons
import CloseIcon from "assets/icones/close-icon.svg";

function Maps() {
	const [mapaAtual, setMapaAtual] = React.useState(MapeamentoCompleto);


	const [primeiroPonto, setPrimeiroPonto] = React.useState("");

	const handleChange1 = (event) => {
		setPrimeiroPonto(event.target.value);
	};

	const [segundoPonto, setSegundoPonto] = React.useState("");

	const handleChange2 = (event) => {
		setSegundoPonto(event.target.value);
	};

	const [possuiRota, setPossuiRota] = React.useState(false);

	function handlePossuiRota(value) {
		if (value === false) {
			setPrimeiroPonto("");
			setSegundoPonto("");
		}

		setPossuiRota(value);
	}

	function handleRotas() {
		if(primeiroPonto != "" && segundoPonto != "") {
			handlePossuiRota(true);
		}
	}

	useEffect(() => {
		handleRotas();
	}, [primeiroPonto, segundoPonto])
	

	return (
		<div className="divMapsPage">
			<h3>Escolha dois pontos para obter a melhor rota</h3>
			<div className="divSelecaoPontos">
				<div className="divOpcoesPontos">
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Ponto 1
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={primeiroPonto}
								label="Ponto 1"
								onChange={handleChange1}
							>
								<MenuItem value={10}>Portão 1</MenuItem>
								<MenuItem value={20}>Térreo CI</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box sx={{ minWidth: 120 }} className="segundaOpcao">
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Ponto 2
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={segundoPonto}
								label="Ponto 2"
								onChange={handleChange2}
							>
								<MenuItem value={10}>Portão 2</MenuItem>
								<MenuItem value={20}>Térreo CI</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</div>

				<div className="divBotaoCancelar">
					<button
						className={"botaoCancelar " + (possuiRota ? "" : "hidden")}
						onClick={() => handlePossuiRota(false)}
					>
						<img
							src={CloseIcon}
							alt="Botão de Cancelar"
							title="Botão de Cancelar"
						/>
					</button>
				</div>
			</div>

			<div className="divNavBarMapeamento"></div>
			<div className="divMapeamento">
				<div className="divMapa">
					<img
						alt="Mapeamento de Rotas Completo"
						src={mapaAtual}
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
