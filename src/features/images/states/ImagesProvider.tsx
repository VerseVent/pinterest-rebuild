import  { createContext, useState } from "react";

// Create the context
export const ImagesContext = createContext([]);

// Create the provider component
export const ImagesProvider = ({ children }) => {
  const [recommendedTags, setRecommendedTags] = useState([]);

  return (
    <ImagesContext.Provider value={{ recommendedTags, setRecommendedTags }}>
      {children}
    </ImagesContext.Provider>
  );
};
