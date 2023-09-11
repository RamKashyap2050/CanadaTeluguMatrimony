import UserLogin from "./components/UserLogin";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import UserProfilePage from "./components/UserProfilePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<UserLogin />} />
          <Route path='/usersignup' element={<UserSignup />} />
          <Route path='/userprofile' element={<UserProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
