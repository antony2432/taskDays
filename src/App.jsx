import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </div>
  );
}

export default App;
