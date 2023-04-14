interface HandleProps {
  inputExo2: string
  setInputExo2: (message: string) => void
  setSubmit: (message: string) => void
}
function Form2({ inputExo2, setInputExo2, setSubmit }: HandleProps) {
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputExo2(newValue);
  };
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(inputExo2);// on assigne la valeur de inputExo2 à submit car on a créé un 2e state
  };
  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo2">
        <input
          type="text"
          name="input-promo2"
          id="input-promo2"
          placeholder="Saississez votre message..."
          onChange={handleChangeInputValue}
          value={inputExo2}
        />
        <button className="button" type="submit"> Envoyer </button>
      </label>
    </form>
  );
}
export default Form2;
