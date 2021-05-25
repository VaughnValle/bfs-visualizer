import { useState } from 'react';
import './css/App.css';
import { getInitialGridState } from './helpers/Grid';
import { PAINT } from './constants/ActionTypes';
import Grid from './components/Grid';
import ToolsContainer from './components/ToolsContainer';
import Loading from './components/modals/Loading';

function App() {

  const [gridState, setGridState] = useState(getInitialGridState());
  const [actionType, setActionType] = useState(PAINT);
  const [color, setColor] = useState();
  const [colorPickerState, setColorPickerState] = useState(false);
  const [loadModal, setLoadModal] = useState(false);

  return (
    <div className="App container" style={{cursor:'pointer'}}>
      <Loading show={loadModal}/>
      <div className="row row.row-eq-height > .col-xs-4">
        <ToolsContainer
          color={color}
          setColor={setColor}
          actionType={actionType}
          setActionType={setActionType}
          setColorPickerState={setColorPickerState}
          setGridState={setGridState}
          setLoadModal={setLoadModal}
        />
        <Grid
          color={color}
          setColor={setColor}
          actionType={actionType}
          gridState={gridState}
          setGridState={setGridState}
          colorPickerState={colorPickerState}
          setColorPickerState={setColorPickerState}
        />
      </div>
    </div>
  );
}

export default App;
