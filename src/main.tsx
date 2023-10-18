import ReactDOM from "react-dom/client";
import App from "@/components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");
