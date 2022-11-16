import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-neutral'>
    <div className="navbar bg-primary">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">zodie@pupper.dev</a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
