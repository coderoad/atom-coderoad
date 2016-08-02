import handleActionString from './handle-action-string';

export default function handleTaskActions(actions: string[][]): void {
  const next = actions.shift();
  if (next && next.length) {
    // resolve promises in order
    next.reduce((total: Promise<any>, curr: string) => {
      if (!curr || !curr.length) {
        return total;
      }
      return total.then(() => handleActionString(curr));
    }, Promise.resolve());
  }
}
