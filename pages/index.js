import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='flex flex-col justify-evenly'>
      
    <div className='flex justify-evenly'>
      
      <div className="card card-side card-compact w-full lg:w-2/3 h-[32rem] bg-base-100 shadow-xl m-2 image-full">
        <figure><img src="/RockyPurpleLava.jpg" alt="Squares" className='h-full'/></figure>
        <div className="card-body">
          <h2 className="card-title text-white text-4xl">Hi, I'm Zodie</h2>
          <div>
            <p className='text-lg text-white m-4' >I've been writing code since 2011.</p>
            <p className='text-lg text-white m-4' >I taught myself python in 7th grade so I could automate my math homework and have been in love ever since.</p>
            <p className='text-lg text-white m-4' >My favorite things to create are games and physics simulations, but I've done all kinds of things.</p>
            <p className='text-lg text-white m-4' >My experience includes building websites, basic ocr, XR, gameplay, shaders, design, marketing, video/photo editing, etc. If you need something and it can be done on a computer, I can probably figure it out.</p>
          </div>
        </div>
      </div>
      
    </div>
      
      <div className='flex justify-evenly'>
        
        <div className="card card-side w-full lg:w-2/3 bg-base-100 h-[32rem] shadow-xl m-2">
          <figure><img src="/squares.jpg" alt="Squares" className='h-full'/></figure>
          <div className="card-body">
            <h2 className="card-title">Squares - html</h2>
            <p>A simple puzzle game built entirely in vanilla js. Try to make all the tiles blue!</p>
            <div className="card-actions justify-end">
              <Link href={"/squares"} className="btn btn-primary">Play</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className='flex flex-col justify-evenly w-full lg:w-2/3 m-auto'>
      <div className='flex flex-col lg:flex-row justify-evenly m-auto'>
        <div className=''>
          <div className="card w-96 bg-primary text-primary-content m-2">
            <div className="card-body">
              <h2 className="card-title">Itch.io</h2>
              <p>I will be posting my game projects on itch.io from now on</p>
              <div className="card-actions justify-end ">
                <Link href={"https://zodiepupper.itch.io/"} className="btn text-white bg-[#f05a59] hover:bg-[#d44]">Check it out</Link>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className="card w-96 bg-primary text-primary-content m-2">
            <div className="card-body">
              <h2 className="card-title">Patreon</h2>
              <p>You can find my patreon page here! Please consider supporting.</p>
              <div className="card-actions justify-end">
                <Link href={"https://www.patreon.com/pupperdev"} className="btn">Check it out</Link>
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
      
    </div>
    </>
  )
}
