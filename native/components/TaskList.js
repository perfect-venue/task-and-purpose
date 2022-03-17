import { ScrollView, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
import Task from "./Task";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      complete
    }
  }
`;

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
});

export default function TaskList() {
  const { data } = useQuery(GET_TASKS);
  const tasks = data?.tasks || [];

  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ScrollView>
  );
}
