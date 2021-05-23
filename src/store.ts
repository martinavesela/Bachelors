import {configureStore} from '@reduxjs/toolkit'

export interface State {
  userId: number
  userName: string
}

const initialState: State = {
  userId: 0,
  userName: ""
}

export const appReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case "setUserId":
      return {...state, userId: action.payload}
    case "setUserName":
      return {...state, userName: action.payload}
    default:
      return state
  }
}

export function setUserId(id: number) {
  return {
    type: "setUserId",
    payload: id
  }
}

export function setUserName(name: string) {
  return {
    type: "setUserName",
    payload: name
  }
}

export const store = configureStore({
  reducer: appReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch