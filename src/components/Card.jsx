import { useState } from "react";
import Im1thumb from "../assets/image-product-1-thumbnail.jpg";
import Im1 from "../assets/image-product-1.jpg";
import Im2thumb from "../assets/image-product-2-thumbnail.jpg";
import Im2 from "../assets/image-product-2.jpg";
import Im3thumb from "../assets/image-product-3-thumbnail.jpg";
import Im3 from "../assets/image-product-3.jpg";
import Im4thumb from "../assets/image-product-4-thumbnail.jpg";
import Im4 from "../assets/image-product-4.jpg";

export default function Card() {
  const [currentImg, setCurrentImg] = useState(Im1);
  const changeimg = (th) => {
    setCurrentImg(Imgs[th]);
  };
  const thumbs = [Im1thumb, Im2thumb, Im3thumb, Im4thumb];
  const Imgs = [Im1, Im2, Im3, Im4];
  return (
    <div className="rounded-xl overflow-hidden flex flex-col h-[500px] p-5 w-11/12 mx-auto max-sm:w-full max-sm:p-1">
      <div className="h-4/5">
        <img
          src={currentImg}
          alt="f"
          className="w-full h-full block rounded-t-xl"
        />
      </div>
      <div className="h-1/5 flex justify-between items-center">
        {thumbs.map((th, i) => {
          return (
            <div
              className={`rounded-xl w-16 h-16 block cursor-pointer hover:opacity-40 ${
                Imgs[i] == currentImg ? " border-2 border-orange-500 " : ""
              }`}
              key={th}
              onClick={() => changeimg(i)}
            >
              <img
                src={th}
                alt=""
                className={`rounded-xl  ${
                  Imgs[i] == currentImg ? "opacity-40   " : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
