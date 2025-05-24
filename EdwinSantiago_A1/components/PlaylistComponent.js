import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './PlaylistComponentStyles';

const PlaylistComponent = ({ playlistsArray, handlePress, musicIcon }) => {
    return (
      <View style={styles.grid}>
        {playlistsArray.map((name) => (
          <TouchableOpacity
            key={name}
            style={styles.playlistButton}
            onPress={() => handlePress(name)}
            activeOpacity={0.6}
          >
            <Image source={musicIcon} style={styles.musicIcon} />
            <Text style={styles.playlistButtonText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}

export default PlaylistComponent;