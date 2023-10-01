import LeaguesPages from "./leagues/page";
const Home = () => {
  return (
    <>
      <aside className='w-1/4 h-full overflow-hidden'>
        <LeaguesPages />
      </aside>
    </>
  );
};

export default Home;
