import React, { useState } from 'react';
import { AiFillFolder } from "react-icons/ai";
import "./folder.css";


const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(true);
  console.log(explorer);

  if (explorer.isFolder) {
    return (
      <div style={{marginTop: "5px"}} >
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span style={{paddingLeft: "15px"}}>📁 {explorer.name}</span>
        </div>
        <div style={{display: expand ? "block": "none", paddingLeft: "25px"}}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp}/>
          })}
        </div>
      </div>
    )
  } else {
    return <div className='file'style={{padding: "3.5px 0px"}}>📄 {explorer.name}</div>
  }

}

export default Folder;
