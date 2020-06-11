export default async function request(url) {
  const reponse = await fetch(url);

  return reponse.json();
}
