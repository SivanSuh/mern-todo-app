import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import NotDetails from "../components/NotDetails";
import NotForm from "../components/NotForm";
import { useNotContext } from "../hooks/useNoteContext";

const Home = () => {
  const { notlar, dispatch } = useNotContext();
  useEffect(() => {
    const fetchNotlar = async () => {
      const response = await fetch("/api/notlar");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "NOT_DOLDUR", payload: json });
      }
    };
    fetchNotlar();
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div style={{ margin: "20px auto" }}>
        <NotForm />
      </div>
      <div className="flexStructure">
        {notlar && notlar.map((not) => <NotDetails not={not} key={not._id} />)}
      </div>
    </div>
  );
};

export default Home;
