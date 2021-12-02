import styled from "styled-components";

//header
const Titulo = styled.h1`
  color: #f7c1dc;
`;

const Pergunta = (props) => {
  const { textoDaPergunta } = props;

  return <Titulo> {textoDaPergunta} </Titulo>;
};

export default Pergunta;
