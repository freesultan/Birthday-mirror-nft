import React, { useState } from 'react'
import Mirror from './mirror'
import { DateTimePicker } from '@mui/x-date-pickers'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const Birthinput = () => {
  const [birthdate, setBirthdate] = useState(null);
  const [showImage, setShowImage] = useState(false);
  return (
    <div className='bg-green-200 min-h-screen p-4 flex flex-col justify-center items-center '>
      <h1 className='text-3xl'>Enter your birth time:</h1>

      <div className='p-2 m-2  '>
        <DateTimePicker
          orientation="landscape"
          ampm={false}

          label="Select Your BirthDate"
          value={birthdate}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
          onChange={(newValue) => { setBirthdate(newValue.toLocaleString('YYYYMMDDHH')); setShowImage(false) }} />
      </div>
      <button className="border drop-shadow shadow-lg border-green-600 p-2 bg-green-900 rounded-lg text-slate-300 hover:text-yellow-300"
        onClick={() => { if (birthdate === 'Invalid Date') {return}; setShowImage(true); }}

      >Generate my Birth time Image</button>
      {showImage && birthdate && <>
        <h2 className='p-2 m-2 min-w-[250px]   font-bold border-green-600 drop-shadow-sm '> {birthdate == null ? '' : `You born on ${birthdate}`}</h2>

        <div className=' shadow-md drop-shadow-lg border border-2 rounded border-green-600 w-[400px] h-[400px] overflow-hidden'>

          <Mirror birthdate={birthdate} />

        </div>
      </>
      }

    </div>
  )
}

export default Birthinput