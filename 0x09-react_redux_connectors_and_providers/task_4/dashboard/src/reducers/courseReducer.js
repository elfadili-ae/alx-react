import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import coursesNormalizer from "../schema/courses";

export const initialCourseState = [];

export default function courseReducer(state = Map(initialCourseState), action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            const normalizedData = coursesNormalizer(action.data);
            Object.keys(normalizedData).map((key) => {
                normalizedData[key].isSelected = false;
            });
            return state.merge(normalizedData);
        }

        case SELECT_COURSE: {
            return state.setIn([String(action.index), 'isSelected'], true);
        }

        case UNSELECT_COURSE: {
            return state.setIn([String(action.index), 'isSelected'], false);
        }
        default:
            break;
    }
    return state;
}