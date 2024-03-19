import React, { useEffect, useState } from 'react';

function Maps() {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    };
  }, []);

  const [selects, setSelects] = useState('');

  return (
    <div className='lg:flex flex-col justify-center font-montserrat p-10 pb-20 min-h-screen'>
      <p className='text-center font-bold text-[#5D7468] text-5xl mb-5'>Maps</p>
      <h1 className='text-center mb-6'>
        Look for the nearest evacuation site around you:
      </h1>
      <div className='flex items-center justify-center mb-10'>
        <select
          className='text-center'
          value={selects}
          onChange={e => setSelects(e.target.value)}>
          <option value='https://maps.google.com/maps?width=506&amp;height=400&amp;hl=en&amp;q=Brgy.160%20Headquarters%2036%20Baesa%20Rd,%20Caloocan,%201401%20Metro%20Manila&amp;t=k&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
            Brgy. 160 Multi-Purpose Hall
          </option>
          <option value='https://maps.google.com/maps?width=506&amp;height=400&amp;hl=en&amp;q=Fatima%20Chapel%20Libis%20caloocan&amp;t=k&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
            Fatima Chapel
          </option>
          <option value='https://maps.google.com/maps?width=506&amp;height=400&amp;hl=en&amp;q=Libis%20Baesa%20Elementary%20School&amp;t=k&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
            Libis Baesa Elementary School
          </option>
          <option value='https://maps.google.com/maps?width=506&amp;height=400&amp;hl=en&amp;q=Libis%20Baesa%20Evangelical%20Church&amp;t=k&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
            Libis Baesa Evangelical Church
          </option>
        </select>
      </div>

      {selects === '' && (
        <div className='mx-auto'>
          <div className='sm:min-w-[70vw] w-[80vw] overflow-auto bg-[#a8c9df] shadow-[0rem_0rem_0_6px_#90a59b] mx-auto p-5 rounded-[3rem_0]'>
            <div className='min-h-full text-[#4E4141] text-[1.2em] not-italic text-center mt-7 lg:mt-14 mb-0 mx-5 lg:mx-16'>
              <div className='max-w-full h-[430px] w-full overflow-hidden mt-0 mb-12 mx-0 min-h-full'>
                <div className='h-full w-full max-w-full min-h-screen'>
                  <iframe
                    className='h-full w-full border-0'
                    src='https://maps.google.com/maps?width=506&amp;height=400&amp;hl=en&amp;q=Brgy.160%20Headquarters%2036%20Baesa%20Rd,%20Caloocan,%201401%20Metro%20Manila&amp;t=k&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selects !== '' && (
        <div className='mx-auto'>
          <div className='sm:min-w-[70vw] w-[80vw] overflow-auto bg-[#a8c9df] shadow-[0rem_0rem_0_5px_#90a59b] mx-auto p-5 rounded-[3rem_0]'>
            <div className='min-h-full text-[#4E4141] text-[1.2em] not-italic text-center mt-7 lg:mt-14 mb-0 mx-5 lg:mx-16'>
              <div className='max-w-full h-[430px] w-full overflow-hidden mt-0 mb-12 mx-0 min-h-full'>
                <div className='h-full w-full max-w-full min-h-screen'>
                  <iframe className='h-full w-full border-0' src={selects} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maps;
