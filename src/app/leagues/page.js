import useAllLeagues from "@/hooks/useAllLeagues";
import Image from "next/image";
import imgbundes from "public/images/bundes.png";
import imgpremier from "public/images/premier.png";
import imglaliga from "public/images/laliga.png";
import imgligue1 from "public/images/ligue1.png";
import imgseriea from "public/images/seriea.png";

export default async function LeaguesPages() {
  const leagues = await useAllLeagues();
  const leaguesArr = leagues.leagues;
  const topFiveLeagues = leaguesArr
    .filter(
      (item) =>
        item.strLeague !== "English League Championship" &&
        item.strLeague !== "Scottish Premier League" &&
        item.strLeague !== "Scottish Premier League"
    )
    .slice(0, 5);

  const leagueImgs = {
    "English Premier League": imgpremier,
    "German Bundesliga": imgbundes,
    "Italian Serie A": imgseriea,
    "French Ligue 1": imgligue1,
    "Spanish La Liga": imglaliga,
  };

  return (
    <div className='flex flex-col h-full space-x-1  w-8/12 border-2 border-zinc-700 bg-black '>
      <h1 className='text-center mt-2 mb-2 text-2xl text-white font-bold'>
        Top 5 leagues
      </h1>
      {topFiveLeagues.map((item) => {
        return (
          <article
            className='flex flex-row  cursor-pointer h-1/3 w-30 border-y-2 border-zinc-700'
            key={item?.idLeague}
          >
            <div className='my-auto'>
              <Image
                src={leagueImgs[item.strLeague]}
                width={50}
                height={50}
                alt={item.strLeagueAlternate}
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className=' ml-2 text-white'>{item?.strLeagueAlternate}</h2>
            </div>
          </article>
        );
      })}
    </div>
  );
}
