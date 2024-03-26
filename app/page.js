import { IoStatsChart } from "react-icons/io5";

export default function Home() {
  return (
    <header className="flex justify-between items-center mt-4 mr-2 ml-4">
      {/* User Information */}
      <div className="flex items-center text-xl">
        <h2>TRACK_MINT</h2>
      </div>

      <div className="flex text-center items-center gap-3 ">
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <img src="https://thispersondoesnotexist.com/" alt="" />
        </div>
        <small>Hi, Kalgudi!</small>
      </div>

      {/* Right Side of the NavBar */}
      <nav className="flex items-center gap-3">
        <div className="flex gap-2 items-center hover:cursor-pointer ">
          <IoStatsChart className=" text-2xl" />
          Stats
        </div>
        <div><button className=" border-white border-2 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md">Signout</button></div>
      </nav>
    </header>
  );
}
