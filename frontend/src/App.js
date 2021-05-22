import { useState } from 'react'
import { initialGridState } from './helpers/Grid';
import Grid from './components/Grid';
import PaintOptions from './components/PaintOptions';
import LeftContainer from './components/LeftContainer';
import { PAINT } from './constants/ActionTypes';

function App() {
  
  const [gridState, setGridState] = useState(initialGridState);
  const [actionType, setActionType] = useState(PAINT);
  
  return (
    <div className="App container">
      <div className="row">
        <LeftContainer/>
        <Grid
          actionType={actionType}
          gridState={gridState}
          setGridState={setGridState}
        />
        <PaintOptions setActionType={setActionType}/>
      </div>
    </div>
  );
}

export default App;
