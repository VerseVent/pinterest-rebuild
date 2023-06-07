import { createContext, ReactNode, useState } from "react";
import { IImageContext } from "../interfaces/IImageContext";
import { IInitCategoriesPhotos } from "../interfaces/IInitCategoriesPhotos";
import { IMaxTags } from "../interfaces/ITagsAmount";

type Props = {
  children?: ReactNode;
  // any props that come into the component
};

// Create the context
export const ImagesContext = createContext<IImageContext | null>(null);

// Create the provider component
export const ImagesProvider = ({ children }: Props) => {
  const [recommendedTags, setRecommendedTags] = useState<IMaxTags>({});

  const [profileCategoryPhotos, setProfileCategoryPhotos] =
    useState<IInitCategoriesPhotos>({});

  return (
    <ImagesContext.Provider
      value={{
        recommendedTags,
        setRecommendedTags,
        profileCategoryPhotos,
        setProfileCategoryPhotos,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
