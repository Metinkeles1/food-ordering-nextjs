import Image from "next/image";
import { FaKey, FaHome, FaSignOutAlt } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { useState } from "react";
import Account from "../../components/profile/Account";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className='flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col'>
      <div className='lg:w-80 w-100 flex-shrink-0 mt-8'>
        <div className='relative border border-b-0 flex flex-col items-center px-10 py-5 '>
          <Image
            src='/images/client2.jpg'
            alt=''
            width={100}
            height={100}
            className='rounded-full'
          />
          <b className='text-2xl mt-1'>John Doe</b>
        </div>
        <ul className='text-center font-semibold'>
          <li
            onClick={() => setTabs(0)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 0 && "bg-primary text-white"
            }`}
          >
            <FaHome />
            <button className='ml-1'>Account</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 1 && "bg-primary text-white"
            }`}
          >
            <FaKey />
            <button className='ml-1'>Password</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 2 && "bg-primary text-white"
            }`}
          >
            <RiEBike2Fill />
            <button className='ml-1'>Orders</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 3 && "bg-primary text-white"
            }`}
          >
            <FaSignOutAlt />
            <button className='ml-1'>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
    </div>
  );
};

export default Profile;
