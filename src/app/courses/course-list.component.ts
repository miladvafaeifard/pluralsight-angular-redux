import {Component, OnInit} from '@angular/core';
import {store, FilterCourses} from '../store';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];
  filterCourses: FilterCourses;

  constructor() {
    this.filterCourses = new FilterCourses();
  }

  filterChanged(searchText: string) {
    store.dispatch(this.filterCourses.searchText(searchText));
  }

  updateFromState() {
    const allState = store.getState();
    this.filteredCourses = allState.filteredCourses;
  }

  ngOnInit() {
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    });
    componentHandler.upgradeDom();
  }
}
