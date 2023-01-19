import React, { useState } from "react";
import { useNotContext } from "../hooks/useNoteContext";

const NotForm = () => {
  const [baslik, setBaslık] = useState("");
  const [aciklama, setAcıklama] = useState("");
  const [err, setErr] = useState(null);

  const { dispatch } = useNotContext();

  const handleClick = async (event) => {
    event.preventDefault();

    const not = { baslik, aciklama };

    const fetchApi = await fetch("/api/notlar", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await fetchApi.json();

    if (!fetchApi.ok) {
      setErr(json.hata);
    }
    if (fetchApi.ok) {
      setErr(null);
      setBaslık("");
      setAcıklama("");
      dispatch({ type: "NOT_OLUSTUR", payload: json });
    }
  };
  return (
    <form onSubmit={handleClick} className="form">
      <div className="gridStructure">
        <input
          className="input"
          type="text"
          placeholder="not başlıgı"
          value={baslik}
          onChange={(event) => setBaslık(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="not detayı"
          value={aciklama}
          onChange={(event) => setAcıklama(event.target.value)}
        />
      </div>
      <button type="submit" className="button">
        Ekle
      </button>
      {err && <div className="error">{err}</div>}
    </form>
  );
};

export default NotForm;
