import { useEffect, useRef, useState } from "react";
import Search from "@/components/Search/Search";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import { IImage } from "@/features/images/interfaces/IImage";
import { useImageRecommendation } from "@/features/images/services/useImageRecommendation";

function Main() {
  const { handleReccomendations } = useImageRecommendation();

  const [initPhotos] = useState<IImage[]>([
    {
      id: 1,
      url: "https://i.pinimg.com/564x/10/3e/65/103e6576cb9b83f54cc9a25bf398b6a8.jpg",
      tags: ["nature", "landscape", "female"],
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/8a/21/da/8a21da68eb11a5f9352f8ec7ad1afd85.jpg",
      tags: ["city", "architecture", "female"],
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/1d/17/21/1d17218d92afa9418b7dea603dedf296.jpg",
      tags: ["animals", "wildlife", "male"],
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/24/d6/c8/24d6c823c17582f8eab4810f187fafac.jpg",
      tags: ["nature", "landscape", "ziben"],
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/8c/dd/52/8cdd52096d66cf0cfc5bbf358e5389c0.jpg",
      tags: ["city", "architecture", "test"],
    },
    {
      id: 6,
      url: "https://i.pinimg.com/564x/46/20/50/46205034b5bf8327f79c9c329c67d5fe.jpg",
      tags: ["animals", "wildlife", "ziben"],
    },
    {
      id: 7,
      url: "https://i.pinimg.com/564x/f3/cf/c9/f3cfc98a0dcb3693b3a0296f1d6b99a5.jpg",
      tags: ["nature", "landscape", "savage"],
    },
    {
      id: 8,
      url: "https://i.pinimg.com/564x/74/38/60/7438600966f2fb49dc3ac45c6698ac55.jpg",
      tags: ["city", "architecture", "ziben"],
    },
    {
      id: 9,
      url: "https://i.pinimg.com/564x/75/9f/fa/759ffa6be4e320e4ad2047f4ed5628cd.jpg",
      tags: ["animals", "wildlife", "savage"],
    },
    {
      id: 10,
      url: "https://i.pinimg.com/564x/3d/03/be/3d03be4c0d16218f903b9147acbfe9b7.jpg",
      tags: ["nature", "landscape", "ziben"],
    },
    {
      id: 11,
      url: "https://i.pinimg.com/564x/17/64/51/1764512acc7ace0a19775747ff6e18d2.jpg",
      tags: ["city", "architecture", "savage"],
    },
    {
      id: 12,
      url: "https://i.pinimg.com/564x/2b/76/e2/2b76e2d02a7d1277c5d9f75395fe8217.jpg",
      tags: ["animals", "wildlife", "test"],
    },
    {
      id: 13,
      url: "https://i.pinimg.com/564x/3d/0c/2d/3d0c2dc464e8a62e07cb5b02fb048383.jpg",
      tags: ["nature", "landscape", "test"],
    },
    {
      id: 14,
      url: "https://i.pinimg.com/564x/b3/5c/2c/b35c2c7d5f2dfca01a151e22f517f289.jpg",
      tags: ["city", "architecture", "savage"],
    },
    {
      id: 15,
      url: "https://i.pinimg.com/564x/d2/95/91/d2959175648a1baf3208369cfe167302.jpg",
      tags: ["wolfs", "wildlife", "test"],
    },
  ]);

  const renders = useRef(0);

  const [photos, setPhotos] = useState<IImage[]>([
    {
      id: 1,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["nature", "landscape", "female"],
    },
    {
      id: 2,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["city", "architecture", "female"],
    },
    {
      id: 3,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["animals", "wildlife", "male"],
    },
    {
      id: 4,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["nature", "landscape", "ziben"],
    },
    {
      id: 5,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["city", "architecture", "test"],
    },
    {
      id: 6,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["animals", "wildlife", "ziben"],
    },
    {
      id: 7,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["nature", "landscape", "savage"],
    },
    {
      id: 8,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["city", "architecture", "ziben"],
    },
    {
      id: 9,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["animals", "wildlife", "savage"],
    },
    {
      id: 10,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["nature", "landscape", "ziben"],
    },
    {
      id: 11,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["city", "architecture", "savage"],
    },
    {
      id: 12,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["animals", "wildlife", "test"],
    },
    {
      id: 13,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["nature", "landscape", "test"],
    },
    {
      id: 14,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["city", "architecture", "savage"],
    },
    {
      id: 15,
      url: "https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg",
      tags: ["wolfs", "wildlife", "test"],
    },
  ]);

  useEffect(() => {
    renders.current += 1;
  });

  const [currentPhoto, setCurrentPhoto] = useState<IImage>({
    id: 0,
    url: "",
    tags: [],
  });

  const [viewedTags, setViewedTags] = useState<string[]>([]);

  useEffect(() => {
    handleReccomendations(viewedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedTags]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (userSearchData: string) => {
    const filteredPhotos = initPhotos.filter((photo) =>
      photo.tags.some((tag) => tag.includes(userSearchData))
    );

    setPhotos(filteredPhotos);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);

    document.body.classList.remove("modal-open");
  };

  function handleImageClick(photo: IImage) {
    setViewedTags((prevTags) => [...prevTags, ...photo.tags]);
    setCurrentPhoto(photo);
    toggleModal();
    document.body.classList.add("modal-open");
  }

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
          <Search submitForm={handleSubmit} />
          <ul className="grid grid-cols-12 grid-rows-3 gap-4 mx-4 max-w-6xl mt-8">
            {photos.map((photo) => (
              <div
                className="col-span-3 border rounded-lg border-gray-600 shadow-md overflow-hidden"
                key={photo.id}
              >
                <img
                  onClick={() => handleImageClick(photo)}
                  className="object-cover h-[100%]"
                  src={photo.url}
                  alt="Обои на рабочий стол компьютера, скачать бесплатно красивые ..."
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
