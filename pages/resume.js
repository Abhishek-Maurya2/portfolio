import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { useState, useEffect } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import ResumeDownload from "@/components/ResumeDownload";

const Resume = () => {
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(786);
  const [isScrolledFull, setIsScrolledFull] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the bottom of the document
      const distanceFromBottom =
        Math.ceil(window.innerHeight + window.scrollY) -
        document.documentElement.scrollHeight;

      // Check if the user is within 40px of the bottom
      const isNearBottom =
        width >= 786 ? distanceFromBottom >= -64 : distanceFromBottom >= -193;
      setIsScrolledFull(isNearBottom);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 786; // Base width for scale 1
      setWidth(screenWidth);
      const scaleFactor = screenWidth / baseWidth;

      // Set the scale, limiting to a maximum of 1.5 and a minimum of 0.5
      setScale(Math.min(Math.max(scaleFactor, 0.5), 1.5));
    };

    // Set the initial scale
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 96) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      className={`flex flex-col text-white md:min-h-screen items-center justify-start bg-primary overflow-x-hidden overflow-y-hidden pb-10 gap-6 pt-8 relative ${
        isStickyNav && "mt-[5rem]"
      }`}
    >
      <h1 className="text-xl md:text-4xl uppercase text-center text-white">
        Resume
      </h1>
      <Document
        file={"./resume.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
        className={"overflow-x-hidden overflow-y-hidden relative"}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderMode="canvas"
            scale={scale}
          />
        ))}
      </Document>
      <div
        className={`${
          isScrolledFull
            ? "absolute md:bottom-5 bottom-[1rem]"
            : "fixed bottom-10"
        }  left-1/2 -translate-x-1/2 shadow-lg z-[10]`}
      >
        <ResumeDownload />
      </div>
    </div>
  );
};

export default Resume;
