import danceSongFile from '../static/dance/real_dance_song.mp3'
import * as Pizzicato from 'pizzicato'
import {DANCE_IMAGES_URLS} from "../constants/imagesUrls";
import {loadImages} from "./imageHelpers";

const loaderStab = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

const loadAppImages = () => {
  const srcs = Object.values(DANCE_IMAGES_URLS);

  return loadImages(srcs);
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
