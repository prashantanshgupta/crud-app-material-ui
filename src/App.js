import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Route>
    </Routes>
  );
}

export default App;
