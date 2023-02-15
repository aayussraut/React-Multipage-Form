import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import MultipageForm from "./components/MultipageForm";
function App() {
  const [formData, setFormData] = useState({});

  return <MultipageForm />;
}

export default App;
