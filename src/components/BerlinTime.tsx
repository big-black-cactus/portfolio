// components/BerlinTime.js
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const BerlinTime = () => {
    const [time, setTime] = useState(moment.tz("Europe/Berlin").format('h:mm A'));

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(moment.tz("Europe/Berlin").format('h:mm A'));
      }, 60000); // Update every minute
  
      return () => clearInterval(interval);
    }, []);
  

  return (
      <p className="hidden md:flex text-white font-semibold text-medium">
        <span className='text-gray-500'>Berlin Time: </span> {time}
    </p>
  );
};

export default BerlinTime;
