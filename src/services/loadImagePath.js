const loadImagePath = (image) => {
  const staticImage = image.search(/^(https?)/) < 0;

  return staticImage
    ? // To process the image with the custom loader in Gridsome use (!!assets-loader!)
      // But it will only work with static strings, unfortunately.
      require(`!!assets-loader!@/assets/img/${image}`)
    : // Image url
      image;
};

export default loadImagePath;
