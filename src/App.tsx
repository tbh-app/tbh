import './App.css';
import UnopenedMsgBox from './components/UnopenedMsgBox.tsx';

function App() {
  return (
    <div>
      <div className='msg-box'>
        <div className='msg-box-container'>
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
          <UnopenedMsgBox />
        </div>
      </div>
    </div>
  );
}

export default App;
