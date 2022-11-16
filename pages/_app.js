import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='from-primary to-base-300 bg-gradient-to-b'>
    <div className="navbar bg-transparent">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <div className="m-2 normal-case text-xl font-semibold">zodie@pupper.dev</div>
      </div>
      <div className="navbar-end">
      </div>
    </div>
    <Component {...pageProps} />
  
    <footer className="footer footer-center p-4 bg-transparent text-base-content">
      <div>
        <p>This site built by zodiepupper using Next.js, React.js, Tailwindcss, and Daisyui</p>
      </div>
    </footer>
  </div>
  )
}

export default MyApp
