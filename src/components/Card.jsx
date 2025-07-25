const Header = () => {
  return (
    // Header
    <header className="bg-slate-950">
      <nav className="flex p-10">
        <a href="#" className="pointer"><img src="./src/assets/react.svg" /></a>
        <p className="text-cyan-400 text-3xl ml-4 font-bold">ReactFacts</p>
      </nav>
    </header>
  );
};

const Main = () => {
  return (
    // Main
    <main>
      <section className="flex flex-col px-10 py-14 bg-slate-700 relative">
        <h1 className="text-5xl font-bold text-white z-10">
          Fun facts about React
        </h1>

        <ul className="list-disc flex flex-col gap-4 p-10 marker:text-cyan-400  text-white text-2xl z-10 capitalize">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>is maintained by Meta</li>
          <li>Powers Thousands of enterprise apps, including mobile apps</li>
        </ul>

        {/* Background React Image */}
        <div className="absolute bottom-0 right-0 top-0 h-96 my-auto transform translate-x-1/2">
          <img
            src="./src/assets/react-bg.svg"
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Overlay */}
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-40 h-full w-full z-0"></div>
      </section>
    </main>
  );
};

const Card = () => {
  return (
    <div className="border-3 border-white rounded-2xl flex flex-col overflow-hidden max-w-2xl">
      <Header />
      <Main />
    </div>
  );
};

export default Card;
