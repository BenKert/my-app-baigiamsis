import styled from "styled-components";

const StyledErrorBox = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  border: 3px solid red;
  margin-bottom: 20px;
  padding: 20px;
  color: #fff;
  border-radius: 5px;
`;

export default function ErrorBox(props) {
  return <StyledErrorBox {...props} />;
}
