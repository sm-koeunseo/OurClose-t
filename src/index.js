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

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="mypage" element={<MyPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);