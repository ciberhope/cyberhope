import styled from "styled-components";
import { JigsawPuzzle } from "../game/JigsawPuzzle";
import "../game/jigsaw-puzzle.css";

const JigsawBoxContainer = styled.div`
  border: 1px solid #000;
  //width: 80%;
  //height: 100%;

  height: calc(100% - 40px); //20px margin top and 20px bottom
  margin: 20px;
  flex: 1 1 auto;
`;

const JigsawBox = (props) => {
  const tilesDisponiveis = props.tilesDisponiveis;
  return (
    <JigsawBoxContainer>
      {tilesDisponiveis === 0 ? (
        <div style={{ width: "100", height: "100%" }}>
          <h2>Responda as perguntas, mané!</h2>
        </div>
      ) : (
        <JigsawPuzzle
          rows={3}
          columns={3}
          tilesDisponiveis={tilesDisponiveis}
          imageSrc="https://media.istockphoto.com/photos/global-communication-network-picture-id1271613373"
          onSolved={() => alert("vc ganhou!!!")}
        />
      )}
    </JigsawBoxContainer>
  );
};

export default JigsawBox;
