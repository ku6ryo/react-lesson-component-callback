import { useState } from 'react';

/**
 * 入力されたテキストを親に伝えるコンポーネントです。
 * onButtonClick にコールバックを指定すると、ボタンを押したときに入力テキストが渡されます。
 * <TextInput onButtonClick={[YOUR_FUNCTION]} />
 */
export default function TextInput (props) {
  const [inputText, setInputText] = useState('')
  const onButtonClick = () => {
    props.onButtonClick(inputText)
  }
  const onInputChange = (event) => {
    setInputText(event.target.value)
  }
  return (
    <div>
      <input value={inputText} onChange={onInputChange} />
      <button onClick={onButtonClick}>get value</button>
    </div>
  )
}
