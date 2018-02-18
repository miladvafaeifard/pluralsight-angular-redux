import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../store/IAppState';

export const FILTER_COURSES = '[FILTER] COURSES';

@Injectable()
export class CourseActionsService {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
