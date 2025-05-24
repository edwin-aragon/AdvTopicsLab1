import { Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./CategoriesComponentStyles";

const CategoriesComponent = ({ categoriesArray, handlePress }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryRow}
    >
      <Image
        source={require("../assets/apple-logo.png")}
        style={{ width: 24, height: 24, marginRight: 6, tintColor: "#fff" }}
        resizeMode="contain"
      />
      {categoriesArray.map((cat, idx) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.categoryButton,
            idx === 0 && styles.categoryButtonActive,
          ]}
          onPress={() => handlePress(cat)}
          activeOpacity={0.6}
        >
          <Text
            style={[
              styles.categoryText,
              idx === 0 && styles.categoryTextActive,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesComponent;
