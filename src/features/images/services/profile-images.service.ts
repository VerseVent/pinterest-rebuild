import { IImageContext } from "./../interfaces/IImageContext";
import { ImagesContext } from "./../states/ImagesProvider";
import { useContext } from "react";
import { IImage } from "./../interfaces/IImage";
import { IInitCategoriesPhotos } from "./../interfaces/IInitCategoriesPhotos";
import { ImagesApiService } from "./images-api.service";
export function ProfileImagesService() {
  const { setProfileCategoryPhotos, recommendedTags, profileCategoryPhotos } =
    useContext(ImagesContext) as IImageContext;

  const { getImages } = ImagesApiService();

  const handleProfileCategoryPhotos = async () => {
    const initImages: IImage[] = await getImages();

    const initCategoriesPhotos: IInitCategoriesPhotos = {};

    for (const tag of Object.entries(recommendedTags)) {
      initCategoriesPhotos[tag[0]] = initImages.filter((photo) =>
        photo.tags.includes(tag[0])
      );
    }

    setProfileCategoryPhotos(initCategoriesPhotos);
  };

  const getProfileCategoryPhotos = () => {
    return profileCategoryPhotos;
  };

  return {
    handleProfileCategoryPhotos,
    getProfileCategoryPhotos,
  };
}
