import { IImage } from "@/features/images/interfaces/IImage";
import { IInitCategoriesPhotos } from "@/features/images/interfaces/IInitCategoriesPhotos";
import { useContext } from "react";
import { IImageContext } from "../interfaces/IImageContext";
import { IMaxTags, ITagsAmount } from "../interfaces/ITagsAmount";
import { ImagesContext } from "../states/ImagesProvider";

export function useImageRecommendation() {
  const {
    recommendedTags,
    setRecommendedTags,
    profileCategoryPhotos,
    setProfileCategoryPhotos,
  } = useContext(ImagesContext) as IImageContext;

  const handleReccomendations = (viewedTags: string[]) => {
    const tagsAmount: ITagsAmount = {};
    const maxTags: IMaxTags = {};

    viewedTags.forEach((tag: string) => {
      if (tagsAmount[tag]) {
        tagsAmount[tag] += 1;
        return;
      }
      tagsAmount[tag] = 1;
    });

    Object.entries(tagsAmount).forEach((tagArrValues) => {
      if (Object.keys(maxTags).length < 3) {
        maxTags[tagArrValues[0]] = tagArrValues[1];
        return;
      }

      Object.entries(maxTags).forEach((maxTagArrValues) => {
        if (maxTagArrValues[1] < tagArrValues[1]) {
          delete maxTags[maxTagArrValues[0]];
          maxTags[tagArrValues[0]] = tagArrValues[1];
        }
      });
    });
    setRecommendedTags(maxTags);
  };

  const handleProfileCategoryPhotos = (initPhotos: IImage[]) => {
    const initCategoriesPhotos: IInitCategoriesPhotos = {};

    for (const tag of Object.entries(recommendedTags)) {
      initCategoriesPhotos[tag[0]] = initPhotos.filter((photo) =>
        photo.tags.includes(tag[0])
      );
    }

    setProfileCategoryPhotos(initCategoriesPhotos);
  };

  const getReccomendations = () => {
    return recommendedTags;
  };
  const getProfileCategoryPhotos = () => {
    return profileCategoryPhotos;
  };

  return {
    handleReccomendations,
    getReccomendations,
    handleProfileCategoryPhotos,
    getProfileCategoryPhotos,
  };
}
