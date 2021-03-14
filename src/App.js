import './App.css';
import TextInput from './TextInput';

/**
 * この React アプリのルート(大元)です。
 */
function App() {
  const onButtonClick = (text) => {
    alert(text)
  }
  return (
    <div className="app">
      <TextInput onButtonClick={onButtonClick} /> 
    </div>
  );
}

export default App;
