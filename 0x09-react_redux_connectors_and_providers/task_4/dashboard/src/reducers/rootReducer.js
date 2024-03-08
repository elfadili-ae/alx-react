import uiReducer, { initialUiState } from "./uiReducer"
import courseReducer from "./courseReducer"
import notificationReducer, { initialNotifState } from "./notificationReducer"
import { Map } from 'immutable'

export const initialState = {
    courses: Map([]),
    notifications: Map(initialNotifState),
    ui: Map(initialUiState)
}

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
}

export default rootReducer;