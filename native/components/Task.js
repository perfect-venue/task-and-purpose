import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    flexGrow: 1,
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
      <BouncyCheckbox
        disableBuiltInState
        disabled={false}
        isChecked={completeValue}
        onPress={(v) => setCompleteValue(!v)}
      />
      <TextInput
        style={styles.name}
        value={nameValue}
        onChangeText={setNameValue}
      />
      <Button disabled={loading} onPress={onPressDelete} title="Remove" />
    </View>
  );
}
