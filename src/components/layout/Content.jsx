import styled from "styled-components";

const ContentSection = styled.section`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;

  h2 {
    text-align: center;
    color: lightgray;
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
`;

const Content = (props) => {
  const children = props.children;
  const title = props.title;

  return (
    <ContentSection>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ContentSection>
  );
};

export default Content;
