import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";

const styles = StyleSheet.create({
  appbar: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const TaskAppBar = () => (
  <Appbar style={styles.appbar}>
    <Title>Task and Purpose</Title>
  </Appbar>
);
export default TaskAppBar;
