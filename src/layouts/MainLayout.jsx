import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const handleScroll = () => {
      const totalHeight = main.scrollHeight - main.clientHeight;

      const currentProgress =
        totalHeight > 0 ? (main.scrollTop / totalHeight) * 100 : 0;

      setProgress(currentProgress);
    };

    main.addEventListener("scroll", handleScroll);

    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col md:ml-64">
        <Navbar setIsOpen={setIsOpen} progress={progress} />

        <main ref={mainRef} className="flex-1 overflow-y-auto pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
