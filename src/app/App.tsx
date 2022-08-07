import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { GlobalStyle, theme } from "./styles";
import { Bg } from "./styled-app";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Bg />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
