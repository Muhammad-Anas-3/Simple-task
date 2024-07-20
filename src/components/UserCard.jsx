/* eslint-disable react/prop-types */
const UserCard = ({ user, border }) => {
  return (
    <div
      className={`bg-[#FBFCFF] rounded-xl p-3 flex gap-3 justify-start min-w-80 min-h-52 mb-10 ${border}`}
    >
      <img
        src={user.avatar}
        alt={`${user.name} avatar`}
        className="w-24 h-24 rounded-full"
      />
      <div>
        <h2 className="font-bold text-xl text-[#151B32] mb-1 font-merriweather mt-3">
          {user.name}
        </h2>
        <p className="text-[#151B32] mb-4 font-poppins">{user.location}</p>
        <div className="flex flex-wrap w-[200px] justify-start space-x-1 font-poppins">
          {user.roles.map((role) => (
            <span
              key={role}
              className="text-xs font-poppins font-normal border-[1px] border-[#BFC8E5] text-[#516FD4] rounded-full px-2 py-[2px] m-1"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
