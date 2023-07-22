import React, { useEffect } from 'react'

function Hours_Location() {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    }
  }, []);

  return (
    <div className='font-montserrat py-28'>
      <p className='text-center font-bold text-[#E79898] text-5xl mb-10'>Maps</p>
      <div className='min-h-[calc(100%_-_60px)] mx-auto'>
        <div className='sm:min-w-[80vw] w-9/12 overflow-auto bg-[#9ACEB4] shadow-[0rem_0rem_0_10px_#FFE8E8] mx-auto p-4 rounded-[3rem_0]'>
          <div className='min-h-full text-[#4E4141] text-[1.5em] not-italic text-center mt-12 mb-0 mx-16'>
            <div className='max-w-full h-[60vh] w-full overflow-hidden mt-0 mb-12 mx-0 min-h-full'>
              <div className='h-full w-full max-w-full min-h-screen'>
                <iframe className='h-full w-full border-0' frameBorder={0} 
                src='https://www.google.com/maps/embed/v1/place?q=Kassel+Residences+-+Amsterdam+Building,+East+Rodriguez+Avenue,+Parañaque,+Metro+Manila,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hours_Location;
