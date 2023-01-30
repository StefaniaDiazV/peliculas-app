import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, NewReleases, Search, SignUp, Top } from "./pages";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="new-releases" element={<NewReleases/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="top-movies" element={<Top/>}/>
            </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
