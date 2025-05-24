import { ScrollView } from "react-native";
import styles from "./MusicHomeScreenStyles";
import CategoriesComponent from "./CategoriesComponent";
import PlaylistComponent from "./PlaylistComponent";
import RecentsComponent from "./RecentsComponent";
import AudiobooksComponent from "./AudiobooksComponent";

const categoriesArray = ["All", "Music", "Podcasts", "Audiobooks"];
const playlistsArray = [
  "Hot Hits Canada",
  "Pop Favourites",
  "Vallenato",
  "80s Hard Rock",
  "All About Country",
  "Jazz",
  "Soul",
  "Mexican Pop",
];
const recentsArray = [
  "Pop mix",
  "Hot Hits",
  "Upbeat Mix",
  "Daily Wellness",
  "Hip-Hop Central",
  "80s Hard Rock",
];
const audiobooksArray = [
  {
    title: "Mastering Conversation",
    author: "Helen Stone",
    included: true,
  },
  {
    title: "Control your mind and...",
    author: "Eric Robertson",
    included: true,
  },
  {
    title: "Ikigai: The japanese sec...",
    author: "Hector Garcia",
    included: true,
  },
];

const musicIcon = require("../assets/musical-notes.png");
const audiobookIcon = require("../assets/audiobook.png");
const heartCircleIcon = require("../assets/circle-heart.png");

const MusicAppHomeScreen = () => {
  const handlePress = (label) => {
    alert(`Pressed: ${label}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {/* Heade */}
      <CategoriesComponent
        categoriesArray={categoriesArray}
        handlePress={handlePress}
      />

      {/* Playlists */}
      <PlaylistComponent
        playlistsArray={playlistsArray}
        handlePress={handlePress}
        musicIcon={musicIcon}
      />

      {/* Recents */}
      <RecentsComponent
        recentsArray={recentsArray}
        handlePress={handlePress}
        musicIcon={musicIcon}
      />

      {/* Audiobooks */}
      <AudiobooksComponent
        audiobooksArray={audiobooksArray}
        handlePress={handlePress}
        audiobookIcon={audiobookIcon}
        heartCircleIcon={heartCircleIcon}
      />
    </ScrollView>
  );
};

export default MusicAppHomeScreen;
