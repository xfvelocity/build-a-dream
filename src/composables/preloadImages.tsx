const preloadImage = async (url: string): Promise<unknown> => {
  if (typeof window === "object") {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = resolve;
      image.onerror = reject;
      image.src = url;

      return image
    });
  }
};

export const preloadImages = (imageUrls: string[]): Promise<unknown[]> => {
  const preloadPromises = imageUrls.map((url) => preloadImage(url));

  return Promise.all(preloadPromises);
};
