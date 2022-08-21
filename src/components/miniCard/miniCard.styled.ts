import styled from "styled-components";

export const SmallCard = styled.div`
  color: #ffffff;
  height: 100px;
  background-color: #3761a8;
  width: 280px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px;
  margin: 10px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #3761a8;
    box-shadow: rgba(55, 97, 168, 0.4) 0px 5px 15px;
  }
  p {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Picture = styled.picture`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
