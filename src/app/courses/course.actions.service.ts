import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../store/IAppState';
import { CourseService } from './course.service';

export const FILTER_COURSES = '[FILTER] COURSES';
export const REQUEST_COURSES = '[REQUEST] COURSES';

@Injectable()
export class CourseActionsService {
  constructor(private ngRedux: NgRedux<IAppState>,
              private courseService: CourseService) {
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.ngRedux.dispatch({
        type: REQUEST_COURSES,
        courses
      });
    });
  }

  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
