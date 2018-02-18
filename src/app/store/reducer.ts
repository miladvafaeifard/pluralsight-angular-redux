import {IAppState} from './IAppState';
import { FILTER_COURSES } from '../courses/course.actions.service';

const courses = [
  {
    'id':
      1,
    'name':
      'Building Apps with React',
    'topic':
      'ReactJS'
  },
  {
    'id':
      2,
    'name':
      'Building Apps with Angular',
    'topic':
      'AngularJS'
  },
  {
    'id':
      3,
    'name':
      'Building Apps with Angular and Redux',
    'topic':
      'Angular and Redux'
  }
];

const initState: IAppState = {
  courses: courses,
  filteredCourses: courses
};

function filterCourses(state, action) {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(course => {
      return course.name.toLowerCase()
        .indexOf(action.searchText.toLowerCase()) > -1;
    })
  })
    ;
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
}
