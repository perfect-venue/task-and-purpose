import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import Appbar from "./components/AppBar";
import TaskList from "./components/TaskList";
import CreateButton from "./components/CreateButton";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { primaryColor } from "./components/common";

// you should be able to run on a mac to get your network address
// $ ifconfig | grep inet | grep -v inet6 | grep -v 127.0.0.1 | cut -d' ' -f2
//const host = "192.168.4.51";
const host = "127.0.0.1";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://${host}:3001/graphql` }),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

function RootComponent() {
  return (
    <View style={styles.container}>
      <Appbar />
      <TaskList />
      <CreateButton />
    </View>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    accent: "orange",
  },
};

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={theme}>
        <RootComponent />
      </PaperProvider>
    </ApolloProvider>
  );
}
