import styled from "styled-components";

export const Container = styled.div`
  max-width: 1380px;
  margin: 0 auto;
`;

type FlexProps = {
  direction?: string;
  jc?: string;
  ai?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ jc }) => jc || "flex-start"};
  align-items: ${({ ai }) => ai || "flex-start"};
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 200px;
  padding: 12px 20px;
  margin: 28px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
