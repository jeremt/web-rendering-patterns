import { useEffect, useState } from "react";
import "./App.css";

async function fetchOffers() {
  const res = await fetch("http://localhost:1234/offers");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function fetchOffer(id) {
  const res = await fetch(`http://localhost:1234/offers/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function Offer({ path }) {
  const [offer, setOffer] = useState();
  useEffect(() => {
    fetchOffer(path.substring(1)).then(setOffer);
  }, []);
  if (!offer) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <a href="/">Back</a>
      <h1>{offer.titre}</h1>
      <small>{offer.technologie}</small>
      <p>{offer.description}</p>
    </>
  );
}

function App() {
  const [offers, setOffers] = useState();
  useEffect(() => {
    fetchOffers().then(setOffers);
  }, []);
  const path = new URL(location.href).pathname;
  if (path !== "/") {
    return <Offer path={path} />;
  }
  if (!offers) {
    return <div>Loading offers...</div>;
  }
  return (
    <>
      <h1>Offres récentes</h1>
      {offers.map((offer, index) => (
        <div key={index}>
          <a href={`/${index + 1}`}>
            <h2 key={index}>{offer.titre}</h2>
          </a>
          <p>{offer.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
