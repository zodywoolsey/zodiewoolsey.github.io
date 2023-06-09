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
            <p className='text-primary-content text-lg m-4' >I'm working on a better future for social XR applications</p>
            <p className='text-primary-content text-lg m-4' >My current project is called "bark" and our goal is to create an open source social XR ecosystem to provide a better ground layer for future platforms</p>
            <p className='text-primary-content text-lg m-4' >We are currently developing our client and will be working to publish a spec soon</p>
            <p className='text-primary-content text-lg m-4 hidden xs:block' >We plan to federate with every other platform we can and offer an open set of tools and documentation</p>
          </div>
        </div>
      </div>
      
    </div>
      <div className='flex justify-evenly'>
        {/* SUPPORT */}
        <div className="card card-side w-full lg:w-2/3  h-[28rem] bg-base-100 text-primary-content m-2">
          <div className="card-body">
            <h2 className="card-title text-4xl">Please consider supporting us</h2>
            <p className=''>The following links are for support vectors to support the team
              <br/>
              and socials for contact or joining the community
              <br/>
              all support is appreciated and goes directly to bark
            </p>
            <div className="card-actions justify-end ">
              <Link href={"https://www.patreon.com/pupperdev"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">patreon</Link>
              <Link href={"https://ko-fi.com/zodiepupper"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">ko-fi</Link>
            </div>
            <div className="card-actions justify-end ">
              <Link href={"https://matrix.to/#/#pupperdev:matrix.pupper.dev"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">matrix</Link>
              <Link href={"https://discord.gg/krwgRUyxDf"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">discord</Link>
              <Link href={"https://meow.social/@zodiepupper"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">mastodon</Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex justify-evenly'>
        {/* BARK */}
        <div className="card w-full lg:w-2/3 h-80 bg-base-100 text-primary-content m-2">
          <div className="card-body">
            <img className='max-w-[4rem] max-h-16 absolute top-0 right-0 m-8 hidden md:block' src={"/doge-color-new.svg"}/>
            <h2 className="card-title text-4xl">bark (wip)</h2>
            <p>A safer social XR platform
              <br/>
              Open source, decentralized, collaborative, and fun
            </p>
            <div className="card-actions justify-end ">
              <Link href={"https://github.com/zodywoolsey/bark"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">bark</Link>
              <Link href={"https://github.com/zodywoolsey/ptb"} className="btn text-white bg-[#fa5c5c] hover:bg-[#d44]">bark-vr</Link>
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
    </>
  )
}
