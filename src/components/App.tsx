import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from './index';
import {Routes} from './Routes';

let height: number = atom.getSize().height;
window.onresize = function() {
  height = atom.getSize().height;
};

@connect((store: CR.State) => {
  return { store };
})
export class App extends React.Component<{store?: CR.State}, {}> {
  render(): React.ReactElement<{}> {
    return (
      <section
        className='cr'
        key='main'
        style={{height}}
      >
        <AppMenu {...this.props.store} />
        <Routes {...this.props.store} />
        <Alert {...this.props.store} />
      </section>
    );
  }
};