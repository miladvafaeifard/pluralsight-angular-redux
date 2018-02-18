import {Action} from 'redux';

export const FILTER_COURSES = '[FILTER] COURSES';

export class FilterCourses implements Action {
  type: 'FILTER_COURSES';
  searchText: string;

  constructor(public text: string) {
    this.searchText = text;
  }
}
