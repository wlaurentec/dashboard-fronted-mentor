import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] p-8">
      <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 ">
        Social Media Dashboard
      </h1>
      <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb-5" />
      <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
        <label
          htmlFor="darkmode"
          className="border bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-1 inline-flex items-center relative"
        >
          <input
            onClick={handleClick}
            type="checkbox"
            id="darkmode"
            className="peer sr-only"
          />
          <div className=" w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>
          <div className="w-4 h-4 rounded-full bg-Light-Grayish-Blue peer-checked:translate-x-6 transition-all"></div>
        </label>
      </div>
    </header>
  );
};

export default Header;
