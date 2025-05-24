import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './RecentsComponentStyles';

const RecentsComponent = ({recentsArray, handlePress, musicIcon}) => {
  return (
      <><Text style={styles.sectionTitle}>Recents</Text><View style={styles.recentGrid}>
          {recentsArray.map((name) => (
              <TouchableOpacity
                  key={name}
                  style={styles.recentCard}
                  onPress={() => handlePress(name)}
                  activeOpacity={0.6}
              >
                  <Image source={musicIcon} style={styles.recentImage} />
                  <Text style={styles.recentTitle}>{name}</Text>
                  <View style={styles.recentMetaRow}>
                      <Text style={styles.recentMeta}>Playlist</Text>
                      <Text style={styles.recentMeta}>User 1</Text>
                  </View>
              </TouchableOpacity>
          ))}
      </View></>
  );
}

export default RecentsComponent;