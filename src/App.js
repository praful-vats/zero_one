import './App.css';
import AsciiArt from './AsciiArt';
import Xero from './components/Xero';

function App() {
  return (
    <div>
      <a className='head1'>Zeros & Ones</a><br></br>
      <a className='head2'>.......and other things</a>
      <div className="App">
        {/* <AsciiArt imageSrc="image.jpg" width={80} height={40} /> */}
        <Xero />
      </div>
    </div>
    
  );
}

export default App;
