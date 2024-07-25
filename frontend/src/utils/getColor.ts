export async function getAverageRGB(src: string): Promise<Uint8ClampedArray> {
  return new Promise((resolve) => {
    const context = document.createElement('canvas').getContext('2d');
    context!.imageSmoothingEnabled = true;

    const img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      context!.drawImage(img, 0, 0, 1, 1);
      resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
}
