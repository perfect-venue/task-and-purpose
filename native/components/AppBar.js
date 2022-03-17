import * as React from "react";
import { Title } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const styles = StyleSheet.create({
  appbar: {
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
    <Avatar.Image size={32} source={require("../images/avatar.png")} />
  </Appbar>
);
export default TaskAppBar;
