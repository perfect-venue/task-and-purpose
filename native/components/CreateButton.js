import { gql, useMutation } from "@apollo/client";
import { Button, StyleSheet, View } from "react-native";

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
  button: {
    padding: 20,
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

  return (
    <View>
      <Button
        style={styles.button}
        title="Create Task"
        onPress={onPressCreate}
      />
    </View>
  );
}
