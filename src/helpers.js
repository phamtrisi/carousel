export function optimalDimensions(container, image) {
  const imageRatio = image.width / image.height;

  // Calculate image height if we want image to take 100% width
  const imageHeightAtMaxWidth = container.width / imageRatio;

  if (imageHeightAtMaxWidth > container.height) {
    return {
      width: container.height * imageRatio,
      height: container.height,
    };
  } else {
    return {
      width: container.width,
      height: imageHeightAtMaxWidth,
    };
  }
}

export async function getImageDimensions(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = (evt) => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.src = url;
  });
}
