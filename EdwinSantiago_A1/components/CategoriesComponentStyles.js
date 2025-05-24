import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginBottom: 12,
  },
  categoryButton: {
    backgroundColor: "#333",
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  categoryButtonActive: { backgroundColor: "#29e33e" },
  categoryText: { color: "#fff", fontSize: 16 },
  categoryTextActive: { color: "#111", fontWeight: "bold" },
});

export default styles;
