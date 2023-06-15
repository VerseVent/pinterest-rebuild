import { IImage } from "../interfaces/IImage";

export function ImagesApiService() {
  const getImages = async (): Promise<IImage[]> => {
    const result = await fetch("Images.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const images: IImage[] = await result.json();

    return images;
  };

  return { getImages };
}
