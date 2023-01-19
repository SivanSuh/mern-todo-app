import React from "react";
import { useNotContext } from "../hooks/useNoteContext";

const NotDetails = ({ not }) => {
  const { dispatch } = useNotContext();
  const handleClick = async () => {
    const response = await fetch("/api/notlar/" + not._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "NOT_SIL", payload: json });
    }
  };
  return (
    <div className="box not content">
      <div>
        <p className="baslik">{not.baslik}</p>
        <p>{not.aciklama}</p>
      </div>
      <p onClick={handleClick} className="delete">
        X
      </p>
    </div>
  );
};

export default NotDetails;
