import styled from "styled-components";

const QuestionSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 30%;

  @media only screen and (max-width: 700px) {
    width: 90%;
    margin: auto;
  }
`;

export default QuestionSection;
