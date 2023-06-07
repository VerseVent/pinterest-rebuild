import { IImage } from "../../interfaces/IImage";

type Props = {
  item: [string, IImage[]];
};

function CategoryContent({ item }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {item[1].map((photo: IImage, i: number) => (
        <div className="col-span-3" key={i}>
          <img
            className="rounded-xl h-full object-cover"
            src={photo.url}
            alt={photo.tags[0]}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryContent;
