import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            return action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false
                }
            })
        }

        case SELECT_COURSE: {
            return state.map((course) => {
                const ret = {
                    ...course
                };
                if (course.id === action.index) {
                    ret.isSelected = true;
                }
                return ret;
            })
        }

        case UNSELECT_COURSE: {
            return state.map((course) => {
                const ret = {
                    ...course
                };
                if (course.id === action.index) {
                    ret.isSelected = false;
                }
                return ret;
            })
        }
        default:
            break;
    }
    return state;
}