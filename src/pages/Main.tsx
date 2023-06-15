import { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import Search from "../components/Search/Search";
import { IImage } from "../features/images/interfaces/IImage";
import { ImageRecommendationService } from "../features/images/services/images-recommendation.service";
import { ImagesFiltersService } from "../features/images/services/images-filters.service";
import { UsersValidationService } from "../features/users/services/users-validation.service";
import { RxCross2 } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { ImagesService } from "../features/images/services/images.service";
import { ImagesContext } from "../features/images/states/ImagesProvider";
import { IImageContext } from "../features/images/interfaces/IImageContext";
import { UserContext } from "../features/users/states/UserProvider";
import { IUserContext } from "../features/users/interfaces/IUserContext";

function Main() {
  const { handleReccomendations } = ImageRecommendationService();
  const { filterImages, sortByLikes, sortByViews } = ImagesFiltersService();
  const { getActualUser } = UsersValidationService();

  const [currentPhoto, setCurrentPhoto] = useState<IImage>({
    id: 0,
    url: "",
    tags: [],
    views: 0,
    likes: 0,
  });

  const { setInitialImages, deleteImage } = ImagesService();
  const [viewedTags, setViewedTags] = useState<string[]>([]);

  async function fetchImages() {
    try {
      await setInitialImages();
    } catch (e) {
      console.log(e);
    }
  }

  const { images } = useContext(ImagesContext) as IImageContext;
  const { isAdminPanelVisible } = useContext(UserContext) as IUserContext;

  const [compImages, setCompImages] = useState<IImage[]>([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCompImages(images);
  }, [images]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (userSearchData: string) => {
    const filteredImages = filterImages(images, userSearchData);

    setCompImages(() => [...filteredImages]);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);

    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    handleReccomendations(viewedTags);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedTags]);

  function handleImageClick(photo: IImage) {
    setViewedTags((prevTags) => {
      const newTags = [...prevTags, ...photo.tags];

      return newTags;
    });

    setCurrentPhoto(photo);

    toggleModal();

    document.body.classList.add("modal-open");
  }

  function handleImageDelete(id: number) {
    deleteImage(id);
  }

  const handleSort = (value: string) => {
    if (value === "likes")
      setCompImages((prevImages) => sortByLikes(prevImages));

    if (value === "views")
      setCompImages((prevImages) => sortByViews(prevImages));
  };

  const options = [
    { id: 1, value: "views", label: "By views" },
    { id: 2, value: "likes", label: "By likes" },
  ];

  const [isStatsVisible, setisStatsVisible] = useState(false);

  const toggleStatsVisible = () => {
    setisStatsVisible((prev) => !prev);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        modalOpen={toggleModal}
        photo={currentPhoto}
      />
      <Header />
      <div className="mt-4">
        <div className="App">
          <h2 className="font-mono">Pinteresting</h2>
          <div className="flex">
            <select
              defaultValue="default"
              onChange={(event) => handleSort(event.target.value)}
              className="font-semibold rounded-xl p-2 text-lg shadow-md mr-6 bg-gradient-to-r
           from-blue-500 to-indigo-900 focus:bg-sky-300 focus:placeholder:text-transparent
            disabled:opacity-75 placeholder:text-white text-black outline-none"
            >
              <option value="default">Sort by</option>
              {options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Search submitForm={handleSubmit} />
          </div>
          <ul className="grid grid-cols-12 grid-rows-3 gap-4 mx-4 max-w-6xl mt-8">
            {compImages.map((image) => (
              <div
                className="relative col-span-3 border rounded-lg border-gray-600 shadow-md overflow-hidden"
                key={image.id}
              >
                {getActualUser().isAdmin && isAdminPanelVisible ? (
                  <>
                    <RxCross2
                      onClick={() => handleImageDelete(image.id)}
                      className="absolute right-1 text-red-500 cursor-pointer
                    hover:scale-[150%] transition-transform mt-2 mr-1"
                    />
                    <BiShow
                      onClick={() => toggleStatsVisible()}
                      className="absolute right-10 text-sky-400 cursor-pointer
                    hover:scale-[150%] transition-transform mt-2 mr-1"
                    />
                    {isStatsVisible ? (
                      <div className="flex absolute justify-around bottom-0 py-3 text-xl backdrop-blur-lg w-[100%]">
                        <p>Likes: {image.likes}</p>
                        <p>Views: {image.views}</p>
                      </div>
                    ) : null}
                  </>
                ) : null}

                <img
                  onClick={() => handleImageClick(image)}
                  className="object-cover h-[100%]"
                  src={image.url}
                  alt="зображення галереї"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
