import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 8,
  },
  recentGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginBottom: 20,
  },
  recentCard: {
    width: "32%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  recentImage: {
    width: 60,
    height: 60,
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: "#4dd0e1",
  },
  recentTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
    textAlign: "center",
  },
  recentMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 2,
  },
  recentMeta: {
    color: "#ccc",
    fontSize: 12,
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
