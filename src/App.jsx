import SearchSvg from "./assets/Search.svg";
import UserCard from "./components/UserCard";
import user1Image from "./assets/UsersImages/user1.png";
import user2Image from "./assets/UsersImages/user2.png";
import user3Image from "./assets/UsersImages/user3.png";
import user4Image from "./assets/UsersImages/user4.png";
import user5Image from "./assets/UsersImages/user5.png";
import user6Image from "./assets/UsersImages/user6.png";

export default function App() {
  const users = [
    {
      name: "Leiah Nichols",
      avatar: user1Image,
      location: "Troy, MI",
      roles: ["clothes", "stem"],
    },
    {
      name: "Jesus Weiss",
      avatar: user2Image,
      location: "Fort Worth, TX",
      roles: ["headset", "gadget", "speed", "winter"],
    },
    {
      name: "Annie Rice",
      avatar: user3Image,
      location: "Austin, TX",
      roles: ["road", "mountain", "trip", "earth", "nature"],
    },
    {
      name: "Robert Brower",
      avatar: user4Image,
      location: "Cincinnati, OH",
      roles: ["Maintenance", "gears", "frames", "repair"],
    },
    {
      name: "Amy Campbell",
      avatar: user5Image,
      location: "Warrior, AL",
      roles: ["music", "disks"],
    },
    {
      name: "Anthony S. Morin",
      avatar: user6Image,
      location: "Lyndhurst, NJ",
      roles: ["vintage", "electric"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#BFC8E5]">
      <div className="bg-white p-16 rounded-lg shadow-lg max-w-[1200px] m-10">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold font-merriweather">Users</h2>
          <div className="flex justify-between mt-2 font-poppins font-normal min-w-96 w-full lg:flex-row flex-col gap-2">
            <label
              htmlFor="text"
              className="p-2 border rounded w-full flex items-center gap-2 max-w-72"
            >
              <img src={SearchSvg} alt="Search" className="text-[32px]" />

              <input
                type="text"
                placeholder="Search users"
                className="outline-none"
              />
            </label>
            <div className="flex gap-2 text-[#151B32]">
              <button className="px-3 py-2 rounded">Reputation</button>
              <button className="px-3 py-2 bg-[#849FFF] text-white rounded-lg">
                New Users
              </button>
              <button className="px-3 py-2 rounded">Visitors</button>
              <button className="px-3 py-2 rounded">Editors</button>
              <button className="px-3 py-2 rounded">Moderators</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10">
          {users.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              border={index === 1 ? "border-[1px] border-[#BFC8E5]" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
