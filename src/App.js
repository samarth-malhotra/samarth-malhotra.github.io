import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";
import info from "./info.json";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-marker">Developedby{info.fname}</h1>
            <ul className="flex items-center">
              <li>
                {!darkMode && (
                  <FaMoon
                    onClick={() => {
                      setDarkMode(!darkMode);
                      console.log(
                        "🚀 ~ file: App.js:25 ~ App ~ prev",
                        darkMode
                      );
                    }}
                    className="cursor-pointer text-2xl"
                  />
                )}
                {darkMode && (
                  <FaSun
                    onClick={() => {
                      setDarkMode(!darkMode);
                      console.log(
                        "🚀 ~ file: App.js:34 ~ App ~ prev",
                        darkMode
                      );
                    }}
                    className="cursor-pointer text-2xl dark:text-white"
                  />
                )}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              {info.name}
            </h2>
            <h3 className="text-xl py-2">{info.designation}</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              {info.summary}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-white">
            <AiFillTwitterCircle
              className="cursor-pointer"
              onClick={() => window.open("https://twitter.com/warsomesam")}
            />
            <AiFillLinkedin
              className="cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/samarth-malhotra")
              }
            />
            <AiFillGithub
              className="cursor-pointer"
              onClick={() => window.open("https://github.com/samarth-malhotra")}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
