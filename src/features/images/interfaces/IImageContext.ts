import { IMaxTags } from "./ITagsAmount";

export type IImageContext = {
  recommendedTags: IMaxTags;
  setRecommendedTags: (tags: IMaxTags) => void;
};
