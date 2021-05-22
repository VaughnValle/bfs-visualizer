import { useState } from 'react'
import { initialGridState } from './helpers/Grid';
import { PAINT } from './constants/ActionTypes';

import Grid from './components/Grid';
import PaintOptions from './components/PaintOptions';
import LeftContainer from './components/LeftContainer';

function App() {

  const [gridState, setGridState] = useState(initialGridState);
  const [actionType, setActionType] = useState(PAINT);
  const [color, setColor] = useState();

  return (
    <div className="App container">
      <div className="row row.row-eq-height > .col-xs-4">
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
