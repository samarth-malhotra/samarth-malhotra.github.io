import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import info from "./info.json";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

function App() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-marker">Developedby{info.fname}</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              {info.name}
            </h2>
            <h3 className="text-xl py-2">{info.designation}</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              {info.summary}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
