import * as Pizzicato from "pizzicato";

export const loadSong = src => {
  return new Promise(resolve => {
    const realDanceSong = new Pizzicato.Sound(src, () => {
      resolve(realDanceSong);
    });
  });
};