import React, { PropTypes } from 'react';
import Toggle from './toggle';

const playBar = (props) => {
  return (
    <div className="drumrackbar">
      <div className="drumracklabel">SEQUENCE</div>
      <Toggle abfunc={props.toggle_f} />
      <div className="bpmplaybar">
        <input type="number" className="tempolabel" onChange={props.tempo_f} value={props.bpm_num} />
        <div className="playstopbutton" onClick={props.playbutton_f}>
          <i className="fa fa-play fa-2x" aria-hidden="true" />
          <div className="slash">/</div>
          <i className="fa fa-stop fa-2x" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

playBar.propTypes = {
  bpm_num: PropTypes.number,
  toggle_f: PropTypes.func,
  tempo_f: PropTypes.func,
  playbutton_f: PropTypes.func
};

export default playBar;


/**
              <div className="drumrackbar">
                <div className="drumracklabel">SEQUENCE</div>
                <Toggle abfunc = {this.abswitch} />
                <div className="bpmplaybar">
                  <input type="number" className="tempolabel" onChange={this.changeTempo} value={this.state.bpm} />
                  <div className="playstopbutton" onClick={this.startStop}><i className="fa fa-play fa-2x" aria-hidden="true" /><div className="slash">/</div><i className="fa fa-stop fa-2x" aria-hidden="true" /></div>
                </div>
              </div>
**/