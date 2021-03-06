import styled from "styled-components";

export const TimerStyled = styled.div`
  border: 5px solid #fff;
  border-radius: 50px;
  margin: 0 auto 10px;
  padding: 15px 0;
  text-align: center;
  width: 85%;
  @media (min-width: 768px) {
    width: 65%;
  }
`;

export const TimerLabelStyled = styled.div`
  font-size: 30px;
`;

export const TimeLeftStyled = styled.div`
  font-size: 80px;
`;
