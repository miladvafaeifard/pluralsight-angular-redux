import {Action} from 'redux';

export const FILTER_COURSES = '[FILTER] COURSES';

export class FilterCourses implements Action {
  type: string = FILTER_COURSES;

  public searchText(searchText) {
    return {
      type: this.type,
      searchText: searchText
    };
  }
}
