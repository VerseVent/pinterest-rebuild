import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CategoryContent from "../features/images/components/CategoryContent/CategoryTab";
import CategoryTab from "../features/images/components/CategoryTab/CategoryTab";
import { ProfileImagesService } from "../features/images/services/profile-images.service";

function Profile() {
  const { handleProfileCategoryPhotos, getProfileCategoryPhotos } =
    ProfileImagesService();

  const [tabs, setTabs] = useState([true, false, false]);

  const handleTab = (tabIndex: number) => {
    setTabs((prevTabList) =>
      prevTabList.map((_, i) => (i === tabIndex ? true : false))
    );
  };

  useEffect(() => {
    handleProfileCategoryPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-6xl h-[100vh] py-4 mx-auto flex justify-between">
        <div className="w-[100%] py-4 grid grid-cols-12 p-6 rounded-xl mt-4 gap-12 bg-gradient-to-tl from-purple-500 via-blue-700 justify-between">
          <div className="col-span-2 text-center">
            <h2 className="text-white text-2xl pb-2">Nickname</h2>
            <img
              className="rounded-full w-full"
              alt="profile_img"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAiAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAYHAgUDAf/EADgQAAEDAwAFCgMHBQAAAAAAAAABAgMEBREGEiExURMUIkFUYYGTodEHI3EVMkJigrHBFhc0UvD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5VNRFSwPnqHoyKNus5y7kQD6KeRX6TWigcrJqxjnpvZF01T643FF0j0qqrq98NM59PR7kYmxz04uX+P3K6Bpf9eWjONSrxx5JPc9Gg0mtFc5GQ1jGvXcyXoKv0zvMjAVuiAy3RzSqqtUjIalzp6LdqLtdGnFvsabTVEVVBHPTvR8UjdZrk3KgR9QAAAAAAAAAAAAAz74h3d0lU21xO+XGiPlx1uXcngm3xNBMWu061V0q53LlXzOXwzs9AIgACgAAFz+Hl3dHUvtczvlyIr4c9Tk3p4pt8O8phLtM60t0o52rhWTNXwzt9ANpAAQAAAAAAAAAAAxKvjWGuqYnb2Svavgqm2mZafW11JeOdMb8mqTWz+dN6fyBWAAFAAAPvQRLNXU0TUyr5WNTxVD4Fm0Btrqy8c6c3MNKmtn867k/dQNOAAQAAAAAAAAAAAg3m3U91oX0lTufta5N7XJuVDzdJtJqezM5KNEmrHJlsedje93sZ1V3i4Vda2smqpOWYuY1auEZ9E6gF4tNVaKpYKtmxV6EifdenFPYgF6t2ltDcqZKPSKBm3ZymrrMd3qn4V709DubQu2V7eWtFw1WrtRMpK33AoQLl/b6s1v8APgxx1FJcOhdsoG8td7hrNbtVMpG33CqjZ7TV3iqSCkZsT78i/dYnFfY1ez26ntNCykptqM2ucu9zl3qpU7lpdQ26lWi0dgZhEwkmrhje9E3uXvX1KpSXi4Ula6shqpOXeuXq5co/6p1hGygr+jWk1PeWclIiQ1jU6Uedju9vsWAAAAAAAAAAeFpXfm2WiTk8Oq5dkTV6uLl7kPalkZDG+SRUaxjVc5V6kTeY7fLnJdrnNVvVdVy4jav4WpuT/usCHLLJNK+WZ7nyPXLnOXKuXipwAFDqOR8TtaJ72O4scqL6HIAl/alx1dX7QrMcOcP9yNJJJK7WlkfI7i9yqvqcgAAAO4pZIZWSwvcyRi5a9q4VFNU0Uvzb1RfMw2riwkrE6/zJ3KZQehY7nJabnDVx51WriRqfiau9ANkBxFIyaJksbkcx7Uc1ydaLuU7CAAAAACtafVq0thdE1cOqXJF+nevomPEzAvHxOWTXt+xUiRJOl1a3R2FGynFAP0DKcUGU4oFAMpxQZTigADKcUGU4oAAynFBlOKAAMpxQZTigRqGgNatVYWxPXLqZyx/p3p++PAshQ/hjymvcOiqwuSPpdWt0tnqXwAAAAAA4kjZK3UlY17V3tcmUPjzCj7JT+U0kgCNzCj7JT+U0cwo+yU/lNJIAjcwo+yU/lNHMKPslP5TSSAI3MKPslP5TRzCj7JT+U0kgCNzCj7JT+Ug5hR9kp/KQkgCNzCj7JT+Ug5hR9kp/KaSQBxFGyJurExrG/wCrUwh2AAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
            />
          </div>
          <div className="col-span-10 bg-black bg-opacity-30 rounded-xl">
            <h1 className="mb-4 p-3 text-white text-2xl">
              Recommended categories
            </h1>
            <ul className="flex overflow-hidden border-2 border-b-0 border-x-0">
              {Object.entries(getProfileCategoryPhotos()).map((image, i) => (
                <CategoryTab
                  key={i}
                  item={image}
                  id={i}
                  isTabOpen={tabs[i]}
                  toggleTab={handleTab}
                />
              ))}
            </ul>
            {Object.entries(getProfileCategoryPhotos()).map((image, i) =>
              tabs[i] ? <CategoryContent key={i} item={image} /> : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
