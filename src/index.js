import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from "./component/MainPage/moved/Home";
import Detail from "./component/MainPage/moved/Detail";
import MyPage from "./component/MainPage/moved/Mypage";
import Bags from "./component/MainPage/moved/fixed/navbar_components/bags";
import Dress from "./component/MainPage/moved/fixed/navbar_components/dress";
import Outer from "./component/MainPage/moved/fixed/navbar_components/outer";
import Pants from "./component/MainPage/moved/fixed/navbar_components/pants";
import Skirt from "./component/MainPage/moved/fixed/navbar_components/skirt";
import Top from "./component/MainPage/moved/fixed/navbar_components/top";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="mypage" element={<MyPage />} />

      <Route path="bags" element={<Bags />} />
      <Route path="dress" element={<Dress />} />
      <Route path="outer" element={<Outer />} />
      <Route path="pants" element={<Pants />} />
      <Route path="skirt" element={<Skirt />} />
      <Route path="top" element={<Top />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);