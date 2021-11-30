import styled from "styled-components";

const BotaoDaReposta = styled.button`
  margin: 10px;
  padding: 20px;
  width: 100%;
`;

const Resposta = (props) => {
  const { textoDaResposta, certa, onRespostaClick } = props;

  return (
    <BotaoDaReposta onClick={() => onRespostaClick(certa)}>
      {textoDaResposta}
    </BotaoDaReposta>
  );
};

export default Resposta;
