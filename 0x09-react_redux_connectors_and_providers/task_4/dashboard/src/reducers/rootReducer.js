import uiReducer, { initialUiState } from "./uiReducer"
import courseReducer, { initialCourseState } from "./courseReducer"
import notificationReducer, { initialNotifState } from "./notificationReducer"
import { Map } from 'immutable'

export const initialState = {
    courses: Map(initialCourseState),
    notifications: Map(initialNotifState),
    ui: Map(initialUiState)
}

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
}

export default rootReducer;