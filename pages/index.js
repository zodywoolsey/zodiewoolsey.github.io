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
            <p className='text-white text-lg m-4' >I've been writing code since 2011.</p>
            <p className='text-white text-lg m-4' >I taught myself python in 7th grade so I could automate my math homework and have been in love ever since.</p>
            <p className='text-white text-lg m-4' >My favorite things to create are games and physics simulations, but I've done all kinds of things.</p>
            <p className='text-white text-lg m-4 hidden xs:block' >My experience includes building websites, basic ocr, XR, gameplay, shaders, design, marketing, video/photo editing, etc. If you need something and it can be done on a computer, I can probably figure it out.</p>
          </div>
        </div>
      </div>
      
    </div>
      
      <div className='flex justify-evenly'>
        
        <div className="card md:card-side w-full lg:w-2/3 bg-base-100 h-[32rem] shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title text-4xl">Squares - html</h2>
            <p>A simple puzzle game built entirely in vanilla js. Try to make all the tiles blue!</p>
            <div className="card-actions justify-end">
              <Link href={"/squares"} className="btn bg-neutral hover:bg-neutral-focus absolute bottom-0 right-0 m-8">Play Now</Link>
            </div>
          </div>
          <figure><img src="/squares.jpg" alt="Squares" className='w-full md:w-auto md:h-full'/></figure>
        </div>
        
      </div>
      <div className='flex justify-evenly'>
        
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
