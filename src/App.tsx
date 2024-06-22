import { JobForm } from "./components/JobFrom";
import JobFormSummary from "./components/JobFormSummary";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="/summary" element={<JobFormSummary />} />
      </Routes>
    </>
  );
}

export default App;
