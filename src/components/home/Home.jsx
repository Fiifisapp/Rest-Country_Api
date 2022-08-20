


const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <input type="text"  id="search" placeholder="Search for a country…"/>
        <select name="continents" id="continents" >
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
