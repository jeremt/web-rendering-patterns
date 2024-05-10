import Link from "next/link";

async function fetchOffers() {
  const res = await fetch("https://codepassport.dev/api/offers");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const offers = await fetchOffers();
  return (
    <>
      <h1>Offres récentes</h1>
      {offers.map((offer, index) => (
        <div key={index}>
          <Link href={`/${index + 1}`}>
            <h2 key={index}>{offer.titre}</h2>
          </Link>
          <p>{offer.description}</p>
        </div>
      ))}
    </>
  );
}
