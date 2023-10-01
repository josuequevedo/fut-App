export default async function useAllLeagues() {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Ups looks like were wront");
  }

  return res.json();
}
