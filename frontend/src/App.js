import { useState } from 'react'
import { initialGridState } from './helpers/Grid';
import { PAINT } from './constants/ActionTypes';

import Grid from './components/Grid';
import ToolsContainer from './components/ToolsContainer';

function App() {

  const [gridState, setGridState] = useState(initialGridState);
  const [actionType, setActionType] = useState(PAINT);
  const [color, setColor] = useState();

  return (
    <div className="App container" style={{cursor:'pointer'}}>
      <div className="row row.row-eq-height > .col-xs-4">
        <ToolsContainer 
          color={color}
          setColor={setColor}
          actionType={actionType}
          setActionType={setActionType}
        />
        <Grid
          color={color}
          actionType={actionType}
          gridState={gridState}
          setGridState={setGridState}
        />
      </div>
    </div>
  );
}

export default App;
