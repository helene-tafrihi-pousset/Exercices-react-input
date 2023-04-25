import { useState } from 'react';

interface SearchBarProps {
  onSubmitSearch: (searchText: string) => void;
}

function Searchbar({ onSubmitSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };

  const handleSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmitSearch(searchText);
    console.log(searchText);
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo4">
        <input
          type="text"
          name="input-promo4"
          id="input-promo4"
          placeholder="Saississez votre message..."
          value={searchText}
          onChange={handleChange}
        />
        <button className="button" type="submit">Envoyer</button>
      </label>
    </form>
  );
}
export default Searchbar;
