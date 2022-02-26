import { useState, useEffect, useRef } from "react";

import Dots from "../components/Dots";

function App() {
  const outerDivRef = useRef<any>();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // locate at top of scroll
      const pageHeight = window.innerHeight; // same as height: 100vh

      if (deltaY > 0) {
        // scroll down
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // page 1
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // page 2
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // page 3
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // scroll up
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // page 1
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // page 2
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // page 3
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerDivRef} className="outer">
      <Dots scrollIndex={scrollIndex} />
      <div className="slide one">토마토</div>
      <div className="slide two">스위스</div>
      <div className="slide three">이효리</div>

      <style jsx>{`
        .outer {
          height: 100vh;
          overflow-y: auto;
        }
        
        .outer::-webkit-scrollbar {
          display: none;
        }
        
        .slide{
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 100px;
        }
        
        .one{
          background-color: coral;
        }
        .two{
          background-color: tomato;
        }
        .three{
          background-color: crimson;
        }
      `}</style>
    </div>
  );
}

export default App;