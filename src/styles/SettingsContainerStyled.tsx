import styled from "styled-components";

const SettingsContainerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 420px;
  }
`;

export default SettingsContainerStyled;
