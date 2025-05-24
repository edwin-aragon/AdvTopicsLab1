import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginBottom: 20,
  },
  playlistButton: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  musicIcon: { width: 32, height: 32, marginRight: 10 },
  playlistButtonText: { color: "#fff", fontSize: 16, flexShrink: 1 },

});

export default styles;