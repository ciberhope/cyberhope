import Pergunta from "../game/Pergunta";
import Resposta from "../game/Resposta";
import JigsawBox from "./JigsawBox";
import QuestionSection from "./QuestionSection";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { shuffleArray } from "../funcoesUteis";

//var é equivalente ao let

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;

  @media only screen and (max-width: 700px) {
    flex-flow: column;
  }
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CaixaDeAssuntos = (props) => {
  const { subAssunto, dadosDePerguntasDoSubAssunto } = props;

  const [numeroDeAcertos, setNumeroDeAcertos] = useState(0);
  const [indiceDaPerguntaAtual, setIndiceDaPerguntaAtual] = useState(0);
  //dadosDePerguntaRandomicamenteSelecionada

  const pegaPerguntaEmSequencia = () => {
    const arrayLength = dadosDePerguntasDoSubAssunto.length;
    return dadosDePerguntasDoSubAssunto[indiceDaPerguntaAtual];
  };

  const [perguntasERespostas, setPerguntasERespostas] = useState(
    pegaPerguntaEmSequencia()
  );

  useEffect(() => {
    setIndiceDaPerguntaAtual(0);
    const p = pegaPerguntaEmSequencia();
    setPerguntasERespostas(p);
  }, [subAssunto]);

  useEffect(() => {
    const novoIndice =
      indiceDaPerguntaAtual + 1 > dadosDePerguntasDoSubAssunto.length - 1
        ? 0
        : indiceDaPerguntaAtual + 1;
    setIndiceDaPerguntaAtual(novoIndice);
  }, [perguntasERespostas]);

  const pergunta = perguntasERespostas.pergunta;
  
  const respostas = [...perguntasERespostas.respostasErradas];
  respostas.push(perguntasERespostas.respostaCerta);

  shuffleArray(respostas);

  const onRespostaClick = (certa) => {
    if (certa) {
      setNumeroDeAcertos(numeroDeAcertos + 1);
    }

    setPerguntasERespostas(pegaPerguntaEmSequencia());
  };

  return (
    <>
      <Container>
        <JigsawBox
          subAssunto={subAssunto}
          tilesDisponiveis={numeroDeAcertos * 3}
        />

        {numeroDeAcertos < 3 && (
          <QuestionSection>
            <Pergunta textoDaPergunta={pergunta} />
            {respostas.map((resposta, index) => {
              return (
                <Resposta
                  key={index}
                  textoDaResposta={resposta}
                  certa={resposta === perguntasERespostas.respostaCerta}
                  onRespostaClick={onRespostaClick}
                />
              );
            })}
          </QuestionSection>
        )}
      </Container>
    </>
  );
};

export default CaixaDeAssuntos;
