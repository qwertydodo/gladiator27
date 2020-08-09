import danceSongUrl from '../static/dance/real_dance_song.mp3'
import cardSongUrl from '../static/gladiator.mp3'
import {CARD_IMAGE_URL, DANCE_IMAGES_URLS, HEAD_IMAGE_URL} from "../constants/imagesUrls";
import {loadImages} from "./imageHelpers";
import {loadSong} from "./songHelper";

const loaderStab = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 5000);
});

const loadAppImages = () => {
  return loadImages([
    ...Object.values(DANCE_IMAGES_URLS),
    CARD_IMAGE_URL,
    HEAD_IMAGE_URL,
  ]);
};

export const initApp = async () => {
    const [danceSong, cardSong] = await Promise.all([
      loadSong(danceSongUrl),
      loadSong(cardSongUrl),
      loadAppImages(),
      //loaderStab,
    ]);

    return  {
      danceSong,
      cardSong,
    };
};
