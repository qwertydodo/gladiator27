import * as Pizzicato from "pizzicato";

export const loadSong = src => {
  return new Promise(resolve => {
    Pizzicato.context.resume();
    const realDanceSong = new Pizzicato.Sound(src, () => {
      resolve(realDanceSong);
    });
  });
};