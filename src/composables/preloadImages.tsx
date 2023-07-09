const preloadImage = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = url;
  });
};

export const preloadImages = (imageUrls: string[]): Promise<any[]> => {
  const preloadPromises = imageUrls.map((url) => preloadImage(url));

  return Promise.all(preloadPromises);
};
