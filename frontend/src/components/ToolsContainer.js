import React from "react";
import "../css/ToolsContainer.css";
import ColorSearch from "./ColorSearch";
import PaintOptions from "./PaintOptions";
import saveImage from "../helpers/Export";
import { getInitialGridState } from "../helpers/Grid";

const ToolsContainer = ({
  color,
  setColor,
  actionType,
  setActionType,
  setColorPickerState,
  setGridState,
  setLoadModal,
}) => {
  return (
    <div className="col-2 border" id="left-container">
      <div className="row mb-4 pt-3">
        <PaintOptions actionType={actionType} setActionType={setActionType} />
      </div>
      <div className="row py-0 my-3" id="color-search-container">
        <ColorSearch
          setColor={setColor}
          color={color}
          setColorPickerState={setColorPickerState}
        />
      </div>
      <div className="row" id="new-pixel-art">
        <button
          type="button"
          className="col btn btn-outline-primary mx-4 mb-2"
          onClick={() => setGridState(getInitialGridState())}
        >
          New Pixel Art
        </button>
      </div>
      <div className="row" id="save-pixel-art">
        <button
          type="button"
          className="col btn btn-outline-primary mx-4"
          onClick={() => {
            setLoadModal(true);
            saveImage(setLoadModal);
          }}
        >
          Save Pixel Art
        </button>
      </div>
    </div>
  );
};

export default ToolsContainer;
