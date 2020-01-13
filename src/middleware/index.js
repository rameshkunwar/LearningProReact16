import { ADD_ARTICLE, DATA_LOADED } from "../redux/constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      switch (action.type) {
        case ADD_ARTICLE:
          const foundWord = forbiddenWords.filter((word) =>
            action.payload.title.includes(word)
          );
          if (foundWord.length) {
            return dispatch({ type: "FOUND_BAD_WORD" });
          }
          return next(action);

        case DATA_LOADED:
          return next(action);

        default:
          break;
      }
      //   if (action.type === ADD_ARTICLE) {
      //     const foundWord = forbiddenWords.filter((word) =>
      //       action.payload.title.includes(word)
      //     );

      //     if (foundWord.length) {
      //       return dispatch({ type: "FOUND_BAD_WORD" });
      //     }
      //   }

      //   if (action.type === DATA_LOADED) return next(action);
    };
  };
}
