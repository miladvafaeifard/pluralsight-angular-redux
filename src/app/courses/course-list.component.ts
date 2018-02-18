import {Component, OnInit} from '@angular/core';
import {store, FilterCourses, IAppState} from '../store';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {Course} from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>;
  filterCourses: FilterCourses;

  constructor(ngRedux: NgRedux<IAppState>) {
    this.filterCourses = new FilterCourses();
  }

  filterChanged(searchText: string) {
    store.dispatch(this.filterCourses.searchText(searchText));
  }

  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
