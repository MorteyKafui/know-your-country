export default function Countries({
  name,
  capital,
  flag,
  currency,
  symbol,
  population,
}) {
  return (
    <div className='flex'>
      <img src={flag} alt='' />
      <div className='container '>
        <h2 className='text-3xl m-1 '>Name: {name}</h2>
        <h3>Capital: {capital}</h3>
        <h3>Currency: {currency}</h3>
        <h3>Symbol: {symbol}</h3>
        <h3>Population: {population}</h3>
      </div>
    </div>
  );
}
