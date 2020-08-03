import danceSongFile from './static/dance/real_dance_song.mp3'
import pavelDance from './static/dance/pavel.gif';
import igorDance from './static/dance/igor.gif';
import yaroslavDance from './static/dance/yaroslav.gif';
import alexanderDance from './static/dance/alexander.gif';
import * as Pizzicato from 'pizzicato'

const loaderPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

const loadImage = src => {
    return new Promise(resolve => {
        const image = new Image();

        image.src = src;

        image.addEventListener('load', () =>{
            resolve(image);
        });

    });
};

const getDanceSong = () => {
    return new Promise(resolve => {
        const realDanceSong = new Pizzicato.Sound(danceSongFile, () => {
            resolve(realDanceSong);
        });
    });
};

export const initApp = async () => {
    const [danceSong] = await Promise.all([
      getDanceSong(),
      loadImage(pavelDance),
      loadImage(igorDance),
      loadImage(yaroslavDance),
      loadImage(alexanderDance), loaderPromise
    ]);

    return  {
        danceSong,
    };
};
