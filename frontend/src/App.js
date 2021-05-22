import { useState, useEffect } from 'react'
import { initialGridState } from './helpers/Grid';
import { PAINT } from './constants/ActionTypes';
import { GRID_HISTORY_LIMIT } from './constants/Grid';

import Grid from './components/Grid';
import PaintOptions from './components/PaintOptions';
import LeftContainer from './components/LeftContainer';

function App() {

  const [gridHistory, setGridHistory] = useState([]);
  const [gridState, setGridState] = useState(initialGridState);
  const [actionType, setActionType] = useState(PAINT);
  const [color, setColor] = useState();

  useEffect(() => {
    const newGridHistory = [ ...gridState, gridState ];
    if (newGridHistory.length > GRID_HISTORY_LIMIT) {
      newGridHistory.shift();
    }
    setGridHistory(newGridHistory);
  }, [gridState]);

  return (
    <div className="App container">
      <div className="row">
        <LeftContainer setColor={setColor}/>
        <Grid
          color={color}
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
