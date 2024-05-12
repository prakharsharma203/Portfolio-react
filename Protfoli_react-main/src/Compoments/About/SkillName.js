import React from "react";

function SkillName({name , img_url}) {
  return (
    <div className="flex  flex-col items-center gap-2">
      <div
        className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"
        style={{ backgroundColor: "rgba(237, 199, 0, 0.07)" }}
      >
        <img
          src={img_url}
          alt=""
          decoding="async"
          loading="lazy"
          style={{ color: "transparent" }}
          className="h-12 w-12 md:h-14 md:w-14 object-contain invert-0"
        />
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
}

export default SkillName;
