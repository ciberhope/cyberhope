import styled from "styled-components";

//header
const Titulo = styled.h1`
  color: #b874fc;
`;

const Pergunta = (props) => {
  const { textoDaPergunta } = props;

  return <Titulo> {textoDaPergunta} </Titulo>;
};

export default Pergunta;
