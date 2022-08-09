import styled from "styled-components";

export const CardSt = styled.div`
  min-height: 500px;
  background-color: #f1f1f1;
  width: 280px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px;
  margin: 12px;
  padding: 16px;
  padding-left: 20px;
  padding-right: 20px;
  p {
    color: ${(props) => props.theme.colors.secondary};
    margin: 4px;
    font-weight: bold;
  }
`;

export const Name = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Img = styled.img`
  width: 200px;
`;

export const Hr = styled.hr`
  border: 0.5px solid #99999933;
  width: 100%;
`;
