import DANCE_SONG_URL from '../static/dance/real_dance_song.mp3'
import CARD_SONG_URL from '../static/gladiator.mp3'
import {CARD_IMAGE_URL, DANCE_IMAGES_URLS, HEAD_IMAGE_URL} from "../constants/imagesUrls";
import {loadImages} from "./imageHelpers";
import {loadSong} from "./songHelper";

const LOADING_ANIMATION_HIDE_TIME = 1000;
const LOADING_SONG_TIME = 17000;
const LOADING_TIME = LOADING_SONG_TIME - LOADING_ANIMATION_HIDE_TIME;

const loaderStab = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, LOADING_TIME);
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
      loadSong(DANCE_SONG_URL),
      loadSong(CARD_SONG_URL),
      loadAppImages(),
      loaderStab,
    ]);

    return  {
      danceSong,
      cardSong,
    };
};
