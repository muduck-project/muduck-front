import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { routes } from "./routes";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Musical } from "./pages/musical/Musical";
import { Actor } from "./pages/actor/Actor";
import { Notice } from "./pages/notice/Notice";
import { SignIn } from "./pages/sign/SignIn";
import { SignUp } from "./pages/sign/SignUp";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.signIn} element={<SignIn />} />
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path={routes.musical} element={<Musical />} />
        <Route path={routes.actor} element={<Actor />} />
        <Route path={routes.notice} element={<Notice />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
