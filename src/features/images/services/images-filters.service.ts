import { IImage } from "../interfaces/IImage";

export function ImagesFiltersService() {
  function filterImages(images: IImage[], userSearchData: string) {
    return images.filter((photo) =>
      photo.tags.some((tag) => tag.includes(userSearchData))
    );
  }
  const sortByLikes = (images: IImage[]) => [
    ...images.sort((a, b) => a.likes - b.likes),
  ];

  const sortByViews = (images: IImage[]) => [
    ...images.sort((a, b) => a.views - b.views),
  ];

  return {
    filterImages,
    sortByLikes,
    sortByViews,
  };
}
