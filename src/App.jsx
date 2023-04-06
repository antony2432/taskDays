import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Settings from "./pages/Settings";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
