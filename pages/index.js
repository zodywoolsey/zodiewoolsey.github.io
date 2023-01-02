import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='flex flex-col justify-evenly'>
      
    <div className='flex justify-evenly'>
        {/* BIO */}
      <div className="card card-side card-compact w-full lg:w-2/3 h-[32rem] m-2 image-full">
        <figure><img src="/RockyPurpleLava.jpg" alt="Squares" className='h-full'/></figure>
        <div className="card-body">
          <h2 className="card-title text-primary-content text-4xl">Hi, I'm Zodie</h2>
          <div>
            <p className='text-primary-content text-lg m-4' >I've been writing code since 2011.</p>
            <p className='text-primary-content text-lg m-4' >I taught myself python in 7th grade so I could automate my math homework and have been in love ever since.</p>
            <p className='text-primary-content text-lg m-4' >My favorite things to create are games and physics simulations, but I've done all kinds of things.</p>
            <p className='text-primary-content text-lg m-4 hidden xs:block' >My experience includes building websites, basic ocr, XR, gameplay, shaders, design, marketing, video/photo editing, etc. If you need something and it can be done on a computer, I can probably figure it out.</p>
          </div>
        </div>
      </div>
      
    </div>
      <div className='flex justify-evenly'>
        {/* ITCH.IO */}
        <div className="card w-full lg:w-2/3 h-80 bg-base-100 text-primary-content m-2">
          <div className="card-body">
            <img className='max-w-[4rem] max-h-16 absolute top-0 right-0 m-8 hidden md:block' src={"/itchio-logo-textless.svg"}/>
            <h2 className="card-title text-4xl">Itch.io</h2>
            <p>I will be posting my game projects on itch.io from now on</p>
            <div className="card-actions justify-end ">
              <Link href={"https://zodiepupper.itch.io/"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">Check it out</Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex justify-evenly'>
        {/* PATREON */}
          <div className="card w-full lg:w-2/3 h-80 bg-[#141518] text-primary-content m-2">
            <div className="card-body">
              <img className='max-w-[4rem] max-h-16 absolute top-0 right-0 m-8 hidden md:block' src={"/Digital-Patreon-Logo_Black.svg"}/>
              <h2 className="card-title text-4xl">Patreon</h2>
              <p>You can find my patreon page here! Please consider supporting.</p>
              <div className="card-actions justify-end">
                <Link href={"https://www.patreon.com/pupperdev"} className="btn text-white bg-[#FF424D] hover:bg-[#ff626d]">Check it out</Link>
              </div>
            </div>
          </div>
        
      </div>
    </div>
      {/* <div className='flex justify-evenly'>
        
        <div>
          <div className="card w-96 bg-primary text-primary-content m-2">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-primary text-primary-content m-2">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
