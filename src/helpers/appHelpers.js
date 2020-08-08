import danceSongFile from '../static/dance/real_dance_song.mp3'
import * as Pizzicato from 'pizzicato'
import {CARD_IMAGE_URL, DANCE_IMAGES_URLS} from "../constants/imagesUrls";
import {loadImages} from "./imageHelpers";

const loaderStab = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 5000);
});

const loadAppImages = () => {
  return loadImages([...Object.values(DANCE_IMAGES_URLS), CARD_IMAGE_URL]);
};

const loadDanceSong = () => {
    return new Promise(resolve => {
        const realDanceSong = new Pizzicato.Sound(danceSongFile, () => {
            resolve(realDanceSong);
        });
    });
};

export const initApp = async () => {
    const [danceSong] = await Promise.all([
      loadDanceSong(),
      loadAppImages(),
      loaderStab,
    ]);

    return  {
        danceSong,
    };
};
