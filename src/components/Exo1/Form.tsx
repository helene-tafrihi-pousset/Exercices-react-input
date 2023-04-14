interface HandleProps {
  inputExo1: string
  setInputExo1: (message: string) => void
}
function Form({ inputExo1, setInputExo1 }: HandleProps) {
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputExo1(newValue);
  };
  return (
    <form className="form">
      <label htmlFor="input-promo">
        <input
          type="text"
          name="input-promo"
          id="input-promo"
          placeholder="Saississez votre message..."
          value={inputExo1}
          onChange={(e) => handleChangeInputValue(e)}
        />
      </label>
    </form>
  );
}
export default Form;
