import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details, Home, Login, NewReleases, Search, SignUp, Top } from "./pages";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="new-releases" element={<NewReleases/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="top-movies" element={<Top/>}/>
              <Route path='movies' element={<Search/>}/>
              <Route path="movies/:id"  element={<Details/>}/>
            </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
