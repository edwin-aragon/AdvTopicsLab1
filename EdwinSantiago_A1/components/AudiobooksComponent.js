import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './AudiobooksComponentStyles';


const AudiobooksComponent = ({audiobooksArray, handlePress, audiobookIcon, heartCircleIcon}) => {
  return (
      <><Text style={styles.sectionTitle}>Audiobooks for you</Text><View style={styles.audiobookGrid}>
          {audiobooksArray.map((book) => (
              <TouchableOpacity
                  key={book.title}
                  style={styles.audiobookCard}
                  onPress={() => handlePress(book.title)}
                  activeOpacity={0.6}
              >
                  {/* Audiobook icon at the top */}
                  <Image
                      source={audiobookIcon}
                      style={styles.audiobookImage}
                      resizeMode="contain" />
                  {/* Heart-in-circle icon at the bottom right */}
                  <Image
                      source={heartCircleIcon}
                      style={styles.heartCircleIcon}
                      resizeMode="contain" />
                  {/* Text content */}
                  <Text style={styles.premiumText}>Included in Premium</Text>
                  <Text style={styles.audiobookTitle}>{book.title}</Text>
                  <Text style={styles.audiobookAuthor}>{book.author}</Text>
              </TouchableOpacity>
          ))}
      </View></>
  );
}
export default AudiobooksComponent;