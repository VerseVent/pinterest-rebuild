import { IImage } from "../../interfaces/IImage";

type Props = {
  item: [string, IImage[]];
  id: number;
  isTabOpen: boolean;
  toggleTab: Function;
};

function CategoryTab({ item, id, isTabOpen, toggleTab }: Props) {
  return (
    <li
      className={`text-white w-[25%] hover:bg-indigo-500 bg-opacity-70 transition-all rounded-xl rounded-t-none cursor-pointer p-1 px-4 text-xl z-[${id}] ${
        isTabOpen ? "grow cursor-default bg-indigo-500" : "grow-0"
      }`}
      onClick={() => toggleTab(id)}
    >
      {`${item[0].toUpperCase()}`}
    </li>
  );
}

export default CategoryTab;
