import {ROUTE_SET, PAGE_SET, PAGE_NEXT} from './_types';
import {store} from '../store';
// import TutorialPackage from '../services/tutorial-package';

export function pageNext(): CR.Action {
  const position: CR.Position = store.getState().position;
  return { type: PAGE_NEXT, payload: { position }};
}

export function pageSet(position: CR.Position = { chapter: 0, page: 0 }): CR.Action {
  if (position.completed) {
    return {
      payload: { route: 'final'},
      type: ROUTE_SET,
    };
  }
  return {
    payload: { position },
    type: PAGE_SET,
  };
  // const page: CR.Page = TutorialPackage.getPage(selectedPosition);
  // const tasks: CR.Task[] = TutorialPackage.getTasks(selectedPosition);
  // const taskTests: CR.TaskTest[] = [].concat.apply([], tasks.map((task) => task.tests || []));
  // const actions: string[][] = tasks.map((task: CR.Task) => task.actions || []);
  // return { type: PAGE_SET, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}
