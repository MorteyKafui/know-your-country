import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <header>
        <h1 className='logo'>KYC</h1>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container'>{children}</main>
      <footer>
        <p>KYC &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

Layout.defaultProps = {
  description:
    'Welcome to the site to search and know more about any country in the world',
};
