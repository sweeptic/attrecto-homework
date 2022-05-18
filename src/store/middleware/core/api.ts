import { apiError, apiSuccess, API_REQUEST } from "store/actions/api";

export const apiMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    next(action);

    /*
        const run = async function() {
        let [r1, r2] = await Promise.all([
            task(1, 10, true).catch(err => { console.log('Task 1 failed!'); throw err; }),
            task(2, 5, true).catch(err => { console.log('Task 2 failed!'); throw err; })
        ]);
        console.log(r1 + ' ' + r2);
        };
        run().catch(err => { console.log('Run failed (does not matter which task)!'); });
        // at 5th sec: Task 2 failed!
        // at 5th sec: Run failed (does not matter which task)!
        // at 10th sec: Task 1 failed!
*/

    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature } = action.meta;
      // feature - integrity key

      // mapping an action to a different
      // action while maintaining integrity using the feature name.

      fetch(url, { body, method })
        .then((response) => response.json())
        .then((response) => {
          if (response.success === false) {
            const error = {
              response: response.status_code,
              error: response.status_message,
              feature: feature,
            };
              dispatch(apiError({ error, feature }));
          } else {
            dispatch(apiSuccess({ response, feature }));      
          }
        })
          .catch((error) => {
              
          dispatch(apiError({ error, feature }));
        });

      //   Promise.all(urls.map((url: any) => fetch(url, { body, method })))
      //     .then((responses) => Promise.all(responses.map((res) => res.json())))
      //     .then((responses) => {
      //         responses.forEach((response) => dispatch(apiSuccess({ response, feature }))
      //         );
      //     })
      // .catch((error) => dispatch(apiError({ error, feature })));
    }
  };
