// @flow

import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(SearchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: SearchTerm };
}
