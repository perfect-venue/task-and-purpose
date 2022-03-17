import { gql, useMutation } from "@apollo/client";
import { Button, StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { primaryColor } from "./common";

const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      task {
        id
        name
        complete
      }
    }
  }
`;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: primaryColor,
  },
});

export default function TaskList() {
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    refetchQueries: ["GetTasks"],
  });

  const onPressCreate = () => {
    const variables = { input: { name: "New Task" } };
    createTask({ variables });
  };

  return <FAB style={styles.fab} small icon="plus" onPress={onPressCreate} />;
}
