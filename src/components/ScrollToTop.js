import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {show && (
        <FaAngleUp onClick={goToTop} className="icon-position icon-style" />
      )}
    </div>
  );
}

export default ScrollToTop;
