import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from '../index';
import Routes from '../Routes';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';

@connect(state => ({
  isWindowOpen: state.window,
}))
export default class SidePanel extends React.Component<{
  isWindowOpen?: boolean
}, {}> {
  render(): React.ReactElement<{}> {
    const {isWindowOpen} = this.props;
    return (
      <section>
        <Drawer
          width={400}
          openSecondary={true}
          open={isWindowOpen}
        >
          <div className='cr-bg'>
            <AppMenu />
            <Routes />
          </div>
        </Drawer>
        <Alert />
      </section>
    );
  }
};