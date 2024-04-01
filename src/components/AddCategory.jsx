import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onValueChange = ({ target }) => {
    setInputValue(target.value)
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    if (inputValue.trim().length >= 1) {
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Find gifs" value={inputValue} onChange={onValueChange}/>
    </form>
  )
}