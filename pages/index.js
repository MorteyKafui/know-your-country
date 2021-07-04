import Countries from '../components/Countries';

export default function HomePage({ countries }) {
  console.log(countries);
  return (
    <div className='container'>
      <h1 className='text-5xl'>Countries In The World</h1>
      <div className='grid'>
        {countries.map((el) => (
          <Countries
            key={el.alpha2Code}
            name={el.name}
            capital={el.capital}
            currency={el.currencies[0].name}
            symbol={el.currencies[0].symbol}
            flag={el.flag}
            population={el.population}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');

  const data = await res.json();

  return {
    props: {
      countries: data.slice(0, 12),
    },
  };
}
