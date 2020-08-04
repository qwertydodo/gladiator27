export const loadImage = src => {
  return new Promise(resolve => {
    const image = new Image();

    image.src = src;

    image.addEventListener('load', () =>{
      resolve(image);
    });

  });
};

export const loadImages = (srcs) => {
  const promises = srcs.map(src => loadImage(src))

  return Promise.all(promises);
};
