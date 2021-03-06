import styled from "styled-components";

const AssuntoBox = styled.div`
  margin: 20px 30px;
  padding: 20px;
  border: 1px solid black;
  background: ${(props) =>
    props.selected ? "rgb(204, 168, 49)" : "rgb(176, 76, 116)"};
  width: 40%;
  max-height: 20vh;
  box-shadow: 0px 0px 15px 5px rgba(179, 98, 184, 0.36);
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.selected ? "rgb(166, 65, 105)" : "rgb(166, 65, 105);"};
    box-shadow: 0px 0px 15px 5px rgba(239, 108, 204, 0.36);
    transform: scale(1.15);
  }

  transition: all 0.3s ease-in-out;
  span {
    color: #000;
    font-size: 1.1em;
  }
`;

const SubAssuntoBox = styled.div`
  h2 {
    color: #000;
  }
  margin: 10px auto;
  padding: 10px;
  border: 1px solid black;
  background: ${(props) =>
    props.selected ? "rgb(250, 214, 7)" : "rgb(209, 84, 134)"};
  width: 20%;
  max-height: 10vh;
  box-shadow: 0px 0px 15px 5px rgba(179, 98, 184, 0.36);

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.selected ? "rgb(53, 33, 43)" : "rgb(63, 63, 73);"};
    box-shadow: 0px 0px 15px 5px rgba(239, 108, 204, 0.36);
    transform: scale(1.15);
  }

  transition: all 0.3s ease-in-out;

  span {
    color: #000;
    font-size: 0.9em;
  }
`;

const BotaoCaixaDeAssuntos = (props) => {
  const { title, selected, onClick, subAssunto } = props;

  console.log("subAssunto", subAssunto);
  return (
    <>
      {subAssunto ? (
        <SubAssuntoBox onClick={onClick} selected={selected}>
          <span>{title}</span>
        </SubAssuntoBox>
      ) : (
        <AssuntoBox onClick={onClick} selected={selected}>
          <span>{title}</span>
        </AssuntoBox>
      )}
    </>
  );
};

export default BotaoCaixaDeAssuntos;
