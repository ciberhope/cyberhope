// adiciona componente styled da dependencia styled-components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import BotaoCaixaDeAssuntos from "./components/layout/BotaoCaixaDeAssuntos";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CaixaDeAssuntos from "./components/layout/CaixaDeAssuntos";
import Papa from "papaparse";

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  background: rgb(33, 33, 43);
  background: linear-gradient(
    0deg,
    rgba(33, 33, 43, 1) 0%,
    rgba(29, 24, 38, 1) 100%
  );
  flex-flow: column;
  min-height: 100vh; //viewport height
  height: 100%;
`;

const BotaoCaixaDeAssuntosContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

const ambienteURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7cKr409ZQ4YZOu6ds05iL7AzJjrK0U4cxpXdr9kwFVHcKQVE6jzIR0zfKdTftlg/pub?gid=317181871&single=true&output=csv";
const socialURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7cKr409ZQ4YZOu6ds05iL7AzJjrK0U4cxpXdr9kwFVHcKQVE6jzIR0zfKdTftlg/pub?gid=802228342&single=true&output=csv";

const carregaDadosDaInternet = (url, callback) => {
  Papa.parse(url, {
    download: true,
    error: function (err) {
      console.log("erro:" + err.message);
    },
    complete: function (results) {
      if (results.errors.length > 0) {
        console.log("deu erro!!!!");
      }
      const dadosMapeados = results.data.slice(1).map((item, index) => {
        return {
          categoria: item[0],
          pergunta: item[1],
          respostaCerta: item[2],
          respostasErradas: [item[3], item[4], item[5]]
        };
      });
      console.log(dadosMapeados);
      callback(dadosMapeados);
    }
  });
};

export default function App() {
  const assuntos = ["Ambiente", "Social"];
  const [assuntoSelecionado, setAssuntoSelecionado] = useState("");
  const [subAssuntoSelecionado, setSubAssuntoSelecionado] = useState("");

  const [dadosAmbiente, setDadosAmbiente] = useState([]);
  const [dadosSocial, setDadosSocial] = useState([]);

  const pegaDadosDasPerguntas = () => {
    carregaDadosDaInternet(ambienteURL, setDadosAmbiente);
    carregaDadosDaInternet(socialURL, setDadosSocial);
  };

  useEffect(() => {
    pegaDadosDasPerguntas();
  }, []);

  const montaSubAssuntos = (assunto) => {
    switch (assunto) {
      case "Ambiente":
        return [
          "Crise hídrica",
          "Saúde Animal nas grandes cidades",
          "Violência nos zoológicos"
        ];
      case "Social":
        return ["Sociedade de consumo", "Violência urbana", "Superpopulação"];
      default:
        return [];
    }
  };

  const subAssuntos = montaSubAssuntos(assuntoSelecionado);

  const onClickCaixaDeAssuntos = (assunto) => {
    if (assunto === assuntoSelecionado) return;

    setAssuntoSelecionado(assunto);
    setSubAssuntoSelecionado("");
  };

  let dadosDeAssuntoSelecionado = [];
  if (assuntoSelecionado !== "")
    dadosDeAssuntoSelecionado =
        assuntoSelecionado === "Ambiente" ? dadosAmbiente : dadosSocial;

  return (
      <AppContainer>
        <Header />
        <Content>
          <BotaoCaixaDeAssuntosContainer>
            {assuntos.map((assunto) => {
              return (
                  <BotaoCaixaDeAssuntos
                      key={assunto}
                      onClick={() => {
                        onClickCaixaDeAssuntos(assunto);
                      }}
                      title={assunto}
                      selected={assuntoSelecionado === assunto}
                  />
              );
            })}
          </BotaoCaixaDeAssuntosContainer>

          <BotaoCaixaDeAssuntosContainer>
            {subAssuntos.map((subAssunto) => {
              return (
                  <BotaoCaixaDeAssuntos
                      key={subAssunto}
                      subAssunto={true}
                      onClick={() => {
                        setSubAssuntoSelecionado(subAssunto);
                      }}
                      title={subAssunto}
                      selected={subAssuntoSelecionado === subAssunto}
                  />
              );
            })}
          </BotaoCaixaDeAssuntosContainer>

          {subAssuntoSelecionado !== "" && (
              <CaixaDeAssuntos
                  subAssunto={subAssuntoSelecionado}
                  dadosDePerguntasDoSubAssunto={dadosDeAssuntoSelecionado.filter(
                      (item) => item.categoria === subAssuntoSelecionado.toUpperCase()
                  )}
              />
          )}
        </Content>
        <Footer />
      </AppContainer>
  );
}
