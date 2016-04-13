import * as React from 'react';
import Paper from 'material-ui/lib/paper';
import DynamicStepper from './setup-checker';
import Step from 'material-ui/lib/Stepper/VerticalStep';
import FlatButton from 'material-ui/lib/flat-button';

import {openDirectory, createPackageJson, installTutorial} from '../../reducers/checks/action-setup';
import {updateNpm} from '../../reducers/checks/action-system';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';

const style = {
  icon: {
    backgroundColor: 'red'
  }
};

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(Action.setRoute('tutorials')),
    verify: () => store.dispatch(Action.verifySetup())
  };
})
export class Checks extends React.Component<{
  checks: CR.Checks, routeToTutorials?: any, verify?: any
}, {}> {
  getSystemChecks(checks: CR.Checks) {
    const system = checks.system;
    return [system.node, system.npm];
  }
  getSetupChecks(checks: CR.Checks) {
    const setup = checks.setup;
    return [setup.dir, setup.packageJson, setup.tutorial];
  }
  render() {
    const {checks, routeToTutorials, verify} = this.props;
    return <Paper className='cr-start'>
    <div className='cr-start-header'>
      <p className='tagline'>Setup</p>

        {/* System Checks */}

        {checks.system.passed ? null : <DynamicStepper title='Dependency Checks' status={this.getSystemChecks(checks)}>
          <Step style={style}
            orderStepLabel='✗'
             stepLabel='Node >= 0.10'
             actions={[
               <FlatButton key={0} primary={true}
                 label='Verify'
                 onTouchTap={verify} />
             ]} >
             <div>Install a newer version of <a href='https://nodejs.org'>Node</a></div>
           </Step>
           <Step orderStepLabel='✗'
              stepLabel='NPM >= 3'
              actions={[
                <FlatButton key={0} primary={true}
                  label='Verify'
                  onTouchTap={verify} />,

              ]} >
              <div>
              Update your version of NPM.<br />
              `> npm update -g npm`
              </div>
            </Step>
         </DynamicStepper>}

         {/* Setup Checks */}

        {checks.setup.passed ? null : <DynamicStepper title='Setup Checks'
        status={this.getSetupChecks(checks)}>
          <Step orderStepLabel='✗'
           stepLabel='working directory'
           actions={[
             <FlatButton key={0} primary={true}
               label='Verify'
               onTouchTap={verify} />,
             <FlatButton key={1} secondary={true}
              label='Do it for me'
              onTouchTap={openDirectory} />
           ]} >
           <div>File -> Open (a new folder)</div>
           </Step>
           <Step orderStepLabel='✗'
               stepLabel='package.json'
               actions={[
                 <FlatButton key={0} primary={true}
                   label='Verify'
                   onTouchTap={verify} />,
                 <FlatButton key={1} secondary={true}
                  label='Do it for me'
                  onTouchTap={createPackageJson} />
               ]} >
               <div>
               Create a package.json by running<br />
               `> npm init -y`</div>
            </Step>
            <Step orderStepLabel='✗'
             stepLabel='install tutorial'
             actions={[
               <FlatButton key={0} primary={true}
                 label='Verify'
                 onTouchTap={verify} />,
                 <FlatButton key={1} secondary={true}
                  label='Do it for me'
                  onTouchTap={installTutorial} />
             ]} >
             <div>
             Install a tutorial using npm. For example:<br />
             `> npm install coderoad-functional-school --save-dev`
             </div>
          </Step>
          </DynamicStepper>}

          {/* Install Guide || Continue */}

    </div>

    {checks.passed
      ?  <FlatButton label='Begin' primary={true} onTouchTap={routeToTutorials}/>
      : <div className='setup-guide'>
      <span>Check the
      <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a></span>
    </div>}
    <p className='version'>Beta</p>
  </Paper>;
  }
}
