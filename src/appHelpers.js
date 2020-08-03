import danceSongFile from './static/real_dance_song.mp3'
import * as Pizzicato from 'pizzicato'

const loaderPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 5000);
});

const getDanceSong = () => {
    return new Promise(resolve => {
        const realDanceSong = new Pizzicato.Sound(danceSongFile, () => {
            resolve(realDanceSong);
        });
    });
};

export const initApp = async () => {
    const [, danceSong] = await Promise.all([loaderPromise, getDanceSong()]);

    return  {
        danceSong,
    };
};
