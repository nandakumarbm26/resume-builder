import "./App.css";
import Landing from "./components/Landing";
import Startup from "./components/Startup";
import UserForm from "./components/UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="start" element={<Startup />} />
        <Route path="user" element={<UserForm />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </div>
  );
}

export default App;
