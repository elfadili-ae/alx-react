import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";


describe('courseReducer testcases', () => {
    it('verifies courseReducer returns empty list', () => {
        expect(courseReducer([], { type: undefined })).toEqual([])
    });

    it('verifies courseReducer returns data passed for FETCH_COURSE_SUCCESS', () => {
        const expected = [
            {
                id: 1, name: "ES6", isSelected: false, credit: 60
            },
            {
                id: 2, name: "Webpack", isSelected: false, credit: 20
            },
            {
                id: 3, name: "React", isSelected: false, credit: 40
            }
        ];
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1, name: "ES6", credit: 60
                },
                {
                    id: 2, name: "Webpack", credit: 20
                },
                {
                    id: 3, name: "React", credit: 40
                }
            ]
        }
        expect(courseReducer([], action)).toEqual(expected);
    });

    it('verifies courseReducer return correct data with SELECT_COURSE', () => {
        const action = { type: SELECT_COURSE, index: 2 };
        const state = [
            {
                id: 1, name: "ES6", isSelected: false, credit: 60
            },
            {
                id: 2, name: "Webpack", isSelected: false, credit: 20
            },
            {
                id: 3, name: "React", isSelected: false, credit: 40
            }
        ];
        const expected = [
            {
                id: 1, name: "ES6", isSelected: false, credit: 60
            },
            {
                id: 2, name: "Webpack", isSelected: true, credit: 20
            },
            {
                id: 3, name: "React", isSelected: false, credit: 40
            }
        ];

        expect(courseReducer(state, action)).toEqual(expected);
    });
});