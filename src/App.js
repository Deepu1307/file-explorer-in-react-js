import { useState } from "react";
import "./style.css";
// import { explorer } from "./data/folderData.js";
import explorer from "./data/myFolderData.js";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <div style={{background: "#000", width: "250px", height: "100vh", color: "#fff"}}>
      <Folder explorer={explorerData} />
      </div>
    </div>
  );
}

export default App;
