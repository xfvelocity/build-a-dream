export const getDynamicAsset = (path: string): string => {
  const assets: any = import.meta.glob(`~/assets/(images|icons|videos)/**/*`, {
    eager: true,
    import: "default",
  });

  return assets[`/assets/${path}`];
};
