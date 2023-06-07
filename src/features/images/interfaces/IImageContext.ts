import { IInitCategoriesPhotos } from "./IInitCategoriesPhotos";
import { IMaxTags } from "./ITagsAmount";

export type IImageContext = {
  recommendedTags: IMaxTags;
  setRecommendedTags: (tags: IMaxTags) => void;
  profileCategoryPhotos: IInitCategoriesPhotos;
  setProfileCategoryPhotos: (photos: IInitCategoriesPhotos) => void;
};
