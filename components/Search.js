import { useState } from 'react';

export default function Search({ searchCountry }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text);
    searchCountry(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='search-box'
        type='text'
        name='search'
        id='search'
        placeholder='Search Country...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
