import React from "react";

import iconBrandRecognition from "../../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../../images/icon-fully-customizable.svg";
import { StatisticsStyled } from "./styles";

const Statistics = () => {
  return (
    <StatisticsStyled>
      <div className="statistics">
        <h2>Estatísticas Avançadas</h2>
        <p>
          Rastrear como seus links estão funcionando em toda a web com nosso
          painel de estatísticas avançada.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <img src={iconBrandRecognition} alt="" />
          </div>
          <div className="card-text">
            <h2>Reconhecimento da Marca</h2>
            <p>
              Aumente o reconhecimento da sua marca a cada clique. Links
              genéricos não significam nada. Links com marca ajudam a incutir
              confiança no seu conteúdo.
            </p>
          </div>
        </div>
        <hr className="line-card" />
        <div className="card card-1">
          <div className="card-img">
            <img src={iconDetailedRecords} alt="" />
          </div>
          <div className="card-text">
            <h2>Registros Detalhados</h2>
            <p>
              Obter informações sobre quem está registrando seus links, sabendo
              quando e onde as pessoas se envolvem com seu conteúdo, ajuda a
              tomar melhores decisões.
            </p>
          </div>
        </div>
        <hr className="line-card" />
        <div className="card card-2">
          <div className="card-img">
            <img src={iconFullyCustomizable} alt="" />
          </div>
          <div className="card-text">
            <h2>Totalmente Personalizável</h2>
            <p>
              Melhore o reconhecimento da marca e a descoberta de conteúdo por
              meio de links personalizáveis, sobrecarregando a participação do
              público.
            </p>
          </div>
        </div>
      </div>
    </StatisticsStyled>
  );
};

export default Statistics;
