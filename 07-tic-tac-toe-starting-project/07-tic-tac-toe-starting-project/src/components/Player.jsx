import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing(true);
  }

  let playerN = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerN = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerN}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
