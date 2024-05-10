async function fetchOffer(id) {
  const res = await fetch(`https://www.codepassport.dev/api/offers/2`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Offer(params) {
  const offer = await fetchOffer(params.id);
  return (
    <>
      <h1>{offer.titre}</h1>
      <small>{offer.technologie}</small>
      <p>{offer.description}</p>
    </>
  );
}
