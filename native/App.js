import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./components/TaskList";
import CreateButton from "./components/CreateButton";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://127.0.0.1:3001/graphql" }),
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
      <Text style={styles.heading}>Task and Purpose</Text>
      <TaskList />
      <CreateButton />
    </View>
  );
}

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RootComponent />
    </ApolloProvider>
  );
}
