import Link from 'next/link';

export default function SquaresSpeed() {
  return (
    <>
    <div className='flex flex-col justify-evenly min-h-screen'>
      <div className='flex justify-evenly'>
          {/* Privacy Policy */}
        <div className="card card-side card-compact w-full lg:w-2/3 h-[32rem] m-2 mb-32 image-full">
          <figure><img src="/RockyPurpleLava.jpg" alt="Squares" className='h-full'/></figure>
          <div className="card-body">
            <h2 className="card-title text-primary-content text-4xl">Squares: Speed - Privacy Policy:</h2>
            <div>
              <p className='text-primary-content text-lg m-4' >The "Squares: Speed" app does collect a small amount of data. The format of the data will change over time as I optimize the data storage.
              Currently, the data being collected includes a timestamp (not publicly accessible), a level reached (publicly accessible), and a seed used to generate your levels (publicly accessible).
              If you have any inquiries, questions, or concerns, please contact me at:
              </p>
              <div className='text-xl sm:text-2xl md:text-3xl xl:text-5xl flex justify-center'><a className="rounded-lg hover:bg-[#0008] py-2 px-4" style={{"transition":"background-color .25s"}} href='mailto:squaressupport@pupper.dev'>squaressupport@pupper.dev</a></div>
              <p className='text-primary-content mt-4 mb-2'>For bug reports, please email a short description to:</p>
              <a className="text-xl rounded-lg hover:bg-[#0008] py-2 px-4" style={{"transition":"background-color .25s"}}  href='mailto:bugs@pupper.dev'>bugs@pupper.dev</a>
              <p className='text-primary-content mt-4 mb-2'>For feature requests, please email a short description to:</p>
               <a className="text-xl rounded-lg hover:bg-[#0008] py-2 px-4" style={{"transition":"background-color .25s"}}  href='mailto:features@pupper.dev'>features@pupper.dev</a>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    </>
  )
}
