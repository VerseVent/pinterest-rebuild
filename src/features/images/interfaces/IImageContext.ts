import { IImage } from "./IImage";
import { IInitCategoriesPhotos } from "./IInitCategoriesPhotos";
import { IMaxTags } from "./ITagsAmount";

export type IImageContext = {
  recommendedTags: IMaxTags;
  setRecommendedTags: (tags: IMaxTags) => void;
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  profileCategoryPhotos: IInitCategoriesPhotos;
  setProfileCategoryPhotos: (photos: IInitCategoriesPhotos) => void;
};
