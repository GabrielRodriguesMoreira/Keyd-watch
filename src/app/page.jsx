
const Home = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-zinc-950 to-purple-800 flex flex-col lg:flex-row items-center justify-center overflow-hidden lg:space-x-32">

      <div className="max-w-md text-white text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Welcome to Keyd Watch!</h1>
        <p className="text-sm lg:text-lg mb-8">
          Abra a sidebar e escolha um Link.
        </p>
        <button className="bg-cyan-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-cyan-800 transition duration-200 ease-in-out mb-10">
          Click for surprise
        </button>
      </div>
      <img
        src="knight.webp"
        alt="Homepage Image"
        className="w-auto h-72 mb-4 lg:h-96"
      />

      <div className=" absolute h-14 w-fit bottom-3 right-3 flex items-center rounded-md space-x-1 cursor-pointer bg-gradient-to-r from-gray-700 to-gray-800 p-2">
      <img src="garoalogo.webp" className="h-full w-auto " alt="" />
        <span className="text-white text-sm italic font-bold line-clamp-2">Developed<br></br>by  Garoa</span>
       
      </div>

    </div>
  );
};

export default Home;
