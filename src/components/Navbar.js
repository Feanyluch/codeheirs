import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();

  // Function to get the user's system theme preference
  const getSystemThemePreference = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Try to get the theme from local storage on the client-side
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If not in local storage, use system theme on the client-side
      setTheme(getSystemThemePreference());
    }
    document.documentElement.setAttribute(
      "data-theme",
      savedTheme || getSystemThemePreference()
    );
  }, []);

  // Function to handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Function to handle theme change
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    window.localStorage.setItem("theme", selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  return (
    <nav className="bg-opacity-50 backdrop-blur-md fixed w-full text-white px-4 py-2 border-b-[1px] border-b-gray-700">
    <div className="max-w-[1200px] mx-auto">
      <div className=" flex items-center justify-between">
        <div className="text-xl font-bold ">
          <em>CodeHeirs</em>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <ul className="flex items-center justify-center">
              <li className="px-4">
                <a>Blog</a>
              </li>
              <li className="px-4">
                <a>Project</a>
              </li>
              <li className="px-4">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 focus:outline-none hover:bg-white hover:text-blue-500 transition duration-300"
            >
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </button>
            <ul className="hidden group-hover:block absolute right-0 mt-1 py-2 w-[100px] space-y-2 bg-white text-gray-700 rounded-md shadow-lg">
              <li
                onClick={() => handleThemeChange("light")}
                className="px-4 py-2 cursor-pointer hover:bg-blue-200"
              >
                Light
              </li>
              <li
                onClick={() => handleThemeChange("dark")}
                className="px-4 py-2 cursor-pointer hover:bg-blue-200"
              >
                Dark
              </li>
              <li
                onClick={() => handleThemeChange("system")}
                className="px-4 py-2 cursor-pointer hover:bg-blue-200"
              >
                System
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
