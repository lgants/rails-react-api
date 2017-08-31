import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/index';

const initialState =  {
  articles: [],
  selectedArticle: {},
  status: {
    isFetching: true,
    hasErrored: false,
    error: null,
  }
};

export default function(state = initialState, action){
  switch (action.type){
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: [],
        status: {
          isFetching: true,
          hasErrored: false,
          error: null,
        }
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [action.articles],
        status: {
          isFetching: false,
          hasErrored: false,
          error: null,
        },
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        articles: [],
        status: {
          isFetching: false,
          hasErrored: true,
          error: action.error,
        }
      };
    default:
      return state
  }
}
