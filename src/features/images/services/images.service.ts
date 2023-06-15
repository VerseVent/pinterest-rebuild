import { useContext } from "react";
import { IImageContext } from "../interfaces/IImageContext";
import { ImagesContext } from "../states/ImagesProvider";
import { ImagesApiService } from "./images-api.service";

export function ImagesService() {
  const { setImages, images } = useContext(ImagesContext) as IImageContext;
  const { getImages } = ImagesApiService();

  async function setInitialImages() {
    const imagesData = await getImages();
    setImages(() => [...imagesData]);
  }
  async function deleteImage(imageId: number) {
    setImages((images) => images.filter((image) => image.id !== imageId));
  }
  async function getImagesFromContext() {
    return images;
  }
  return {
    setInitialImages,
    getImagesFromContext,
    deleteImage,
  };
}
