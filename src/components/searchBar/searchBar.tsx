import React from "react";
import { Container, Flex } from "..";

import styled from "styled-components";

const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 28px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  :hover {
    background-color: ${(props) => props.theme.colors.secondary + "BB"};
  }
`;

interface SearchProps {
  value: string;
  onChange: (e: any) => void;
  onClick: () => void;
}

export const SearchBar = ({ value, onChange, onClick }: SearchProps) => {
  return (
    <Container>
      <Flex jc="center" ai="center">
        <Input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onClick();
          }}
        />
        <Button onClick={onClick}>Search</Button>
      </Flex>
    </Container>
  );
};
