import React from "react";

function CategoryContent({ item }) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {item[1].map((photo, i) => (
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
