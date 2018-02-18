import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { Course } from './course';
import { CourseActionsService } from './course.actions.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private courseActions: CourseActionsService) {
  }

  filterChanged(searchText: string) {
    this.courseActions.filterCourses(searchText);
  }

  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
