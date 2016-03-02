import * as Type from './actionTypes';
import {store} from '../_base';

export function showHint(): CR.Action {
  return { type: Type.SHOW_HINT };
}

export function runTests(): CR.Action {
  return { type: Type.RUN_TESTS };
}

export function testResult(result): CR.Action {
  let actions = store.getState().editorActions;
  return { type: Type.TEST_RESULT, payload: { result, actions } };
}

export function testComplete(): CR.Action {
  return { type: Type.TEST_COMPLETE };
}
