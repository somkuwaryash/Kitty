import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEarthEurope, faCircleInfo, faPeopleGroup, faMoneyBillAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between bg-white w-full p-1 h-18">
      <div className="flex items-center justify-center">
        <Image src="/FREE_-_HDconvert.com_Capture.png" alt="Logo" width={200} height={85} />
      </div>
      <div className="flex items-center justify-center gap-4 text-black">
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCalendarDays} className="text-3xl" />
          <span>Calendar</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faEarthEurope} className="text-3xl" />
          <span>Region</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCircleInfo} className="text-3xl" />
          <span>About us</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-3xl" />
          <span>Groups</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faMoneyBillAlt} className="text-3xl" />
          <span>My coupon</span>
        </div>
        <div className="flex flex-col items-center justify-center border-warning">
          <FontAwesomeIcon icon={faLaptop} className="text-3xl" />
          <span>Get the app</span>
        </div>
        <span className="font-bold text-3xl" role="button">Join now</span>
        <button className="mx-3 border-2 border-warning rounded-full px-4 bg-white font-bold text-3xl text-black">Sign in</button>
      </div>
    </header>
  );
};

export default Header;