import Grid from './components/Grid';
import PaintOptions from './components/PaintOptions';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <Grid/>
        <PaintOptions/>
      </div>
    </div>
  );
}

export default App;
