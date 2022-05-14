export const actionSplitterMiddleware = () => (next: any) => (action: any) => {
  if (Array.isArray(action)) {
    action.forEach((_action) => next(_action));
  } else {
    next(action);
  }
};
