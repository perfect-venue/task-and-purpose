import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox, IconButton, TextInput } from "react-native-paper";
import { primaryColor } from "./common";

const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      task {
        id
        name
        complete
      }
    }
  }
`;

const DELETE_TASK = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      task {
        id
        name
        complete
      }
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
});

export default function Task({ id, name, complete }) {
  const [nameValue, setNameValue] = useState(name);
  const [completeValue, setCompleteValue] = useState(complete);

  const [updateTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    refetchQueries: ["GetTasks"],
  });
  const [deleteTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    refetchQueries: ["GetTasks"],
  });
  const loading = updateLoading || deleteLoading;

  useEffect(() => {
    if (updateTask) {
      const variables = {
        input: { taskId: id, name: nameValue, complete: completeValue },
      };
      updateTask({ variables });
    }
  }, [id, nameValue, completeValue, updateTask]);

  const onPressDelete = () => {
    const variables = { input: { taskId: id } };
    deleteTask({ variables });
  };

  return (
    <View style={styles.container}>
      <Checkbox
        color={primaryColor}
        status={completeValue ? "checked" : "unchecked"}
        onPress={() => setCompleteValue(!completeValue)}
      />
      <TextInput
        dense
        mode="flat"
        value={nameValue}
        style={styles.input}
        onChangeText={setNameValue}
        underlineColor="transparent"
      />
      <IconButton icon="delete" disabled={loading} onPress={onPressDelete} />
    </View>
  );
}
