import styled from "styled-components";
import { JigsawPuzzle } from "../game/JigsawPuzzle";
import "../game/jigsaw-puzzle.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const JigsawBoxContainer = styled.div`
  border: 1px solid #000;
  //width: 80%;
  //height: 100%;

  max-width: 900px;
  margin: 20px;
  flex: 1 1 auto;
`;

const JigsawBox = (props) => {
  const tilesDisponiveis = props.tilesDisponiveis;
  const subAssunto = props.subAssunto;
  console.log(subAssunto);
  const [dadosDosResumosEDasImagens, setdadosDosResumosEDasImagens] = useState(
    []
  );
  const pegaResumosEImagensDeCadaTema = () => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAAAKoW7Pq3eZaHfEWceix956eUrg14RJ1grQQe7aaUYIkt_CO78ozOe7GJni83ZrZbQGg51ixcEeh/pub?output=csv",
      {
        download: true,
        error: function (err) {
          console.log("Erro:" + err.message);
        },
        complete: function (results) {
          console.log(results);
          setdadosDosResumosEDasImagens(results.data);
        }
      }
    );
  };
  useEffect(() => {
    pegaResumosEImagensDeCadaTema();
  }, []);
  console.log(dadosDosResumosEDasImagens);
  const resumoDoSubAssunto = () => {
    if (subAssunto === "Superpopulação") return dadosDosResumosEDasImagens[0];
    if (subAssunto === "Violência urbana") return dadosDosResumosEDasImagens[1];
    if (subAssunto === "Sociedade de consumo")
      return dadosDosResumosEDasImagens[2];
    if (subAssunto === "Crise hídrica") return dadosDosResumosEDasImagens[3];
    if (subAssunto === "Saúde Animal nas grandes cidades")
      return dadosDosResumosEDasImagens[4];
    if (subAssunto === "Mals tratos em zoológicos")
      return dadosDosResumosEDasImagens[5];
  };
  const imagemDoSubAssunto = () => {
    if (subAssunto === "Superpopulação")
      return "https://i.imgur.com/ALsTh8A.jpeg";
    if (subAssunto === "Violência urbana")
      return "https://i.imgur.com/gtogwp5.jpeg";
    if (subAssunto === "Sociedade de consumo")
      return "https://i.imgur.com/gp8xNT4.jpeg";
    if (subAssunto === "Crise hídrica")
      return "https://i.imgur.com/mcDZh17.jpeg";
    if (subAssunto === "Saúde Animal nas grandes cidades")
      return "https://i.imgur.com/r1cTYMw.jpeg";
    if (subAssunto === "Mals tratos em zoológicos")
      return "https://i.imgur.com/cw3UDLS.jpeg";
  };

  return (
    <JigsawBoxContainer subAssunto={subAssunto} dadosDosResumosEDasImagens>
      {tilesDisponiveis === 0 ? (
        <div style={{ width: "100", height: "100%" }}>
          <h2>{resumoDoSubAssunto()}</h2>
        </div>
      ) : (
        <JigsawPuzzle
          rows={3}
          columns={3}
          tilesDisponiveis={tilesDisponiveis}
          imageSrc={imagemDoSubAssunto()}
          onSolved={() => alert("vc ganhou!!!")}
        />
      )}
    </JigsawBoxContainer>
  );
};

export default JigsawBox;
