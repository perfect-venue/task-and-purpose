import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Box from "@mui/material/Box";
import { green, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AppBar from "./components/AppBar";
import TaskList from "./components/TaskList";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar />
            <TaskList />
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
