import { useContext } from "react";
import { IImageContext } from "../interfaces/IImageContext";
import { IMaxTags, ITagsAmount } from "../interfaces/ITagsAmount";
import { ImagesContext } from "../states/ImagesProvider";

export function ImageRecommendationService() {
  const { recommendedTags, setRecommendedTags } = useContext(
    ImagesContext
  ) as IImageContext;

  const getReccomendations = () => {
    return recommendedTags;
  };

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

  return {
    handleReccomendations,
    getReccomendations,
  };
}
