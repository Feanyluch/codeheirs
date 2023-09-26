import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  // Function to get the user's system theme preference
  const getSystemThemePreference = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState("system");
  const [activeTheme, setActiveTheme] = useState(theme);

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
  // Function to handle theme change
  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === "system") {
      const systemTheme = getSystemThemePreference();
      setTheme(systemTheme);
      window.localStorage.setItem("theme", systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      setTheme(selectedTheme);
      window.localStorage.setItem("theme", selectedTheme);
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
    setActiveTheme(selectedTheme);
  };

  return (
    <nav className="bg-opacity-50 backdrop-blur-md fixed w-full text-var-(--text-color) px-4 py-2 border-b-[1px] border-b-gray-700">
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex items-center justify-between">
          <div className="text-xl font-bold ">
            <em>CodeHeirs</em>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <ul className="flex items-center justify-center">
                <li className="px-4">
                  <Link href="/blogs">Blog</Link>
                </li>
                <li className="px-4">
                  <Link href="/project">Project</Link>
                </li>
                <li className="px-4">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <button
                // onClick={toggleTheme}
                className="rounded-full p-2 focus:outline-none hover:bg-white hover:text-blue-500 transition duration-300"
              >
                {theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </button>
              <ul className="dropdown hidden group-hover:block absolute right-0 px-2 py-2 w-[100px] space-y-2 rounded-md shadow-lg" style={{
                backgroundColor:
                  activeTheme === "light"
                    ? "var(--dropdown-background-light)"
                    : "var(--dropdown-background-dark)",
              }}>
                <li
                  onClick={() => handleThemeChange("light")}
                  className={`px-4 py-2 cursor-pointer ${
                    activeTheme === "light" ? "active-theme" : ""
                  }`}
                >
                  Light
                </li>
                <li
                  onClick={() => handleThemeChange("dark")}
                  className={`px-4 py-2 cursor-pointer ${
                    activeTheme === "dark" ? "active-theme" : ""
                  }`}
                >
                  Dark
                </li>
                <li
                  onClick={() => handleThemeChange("system")}
                  className={`px-4 py-2 cursor-pointer ${
                    activeTheme === "system" ? "active-theme" : ""
                  }`}
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
