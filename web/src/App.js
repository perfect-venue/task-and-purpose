import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import AppBar from "./components/AppBar";
import TaskList from "./components/TaskList";
import { green, orange } from "@mui/material/colors";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:3001/graphql",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

export default () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
        <TaskList />
      </Box>
    </ThemeProvider>
  </ApolloProvider>
);
