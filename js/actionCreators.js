import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(SearchTerm) {
  return { type: SET_SEARCH_TERM, payload: SearchTerm };
}
