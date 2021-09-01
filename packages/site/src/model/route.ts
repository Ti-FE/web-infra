import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { modules } from '../docs'

export interface RouteSource {
  target: string
  from: 'click' | 'load' | 'scroll'
}

interface RouteState {
  route: RouteSource
}

const hash = window.location.hash.slice(1)

const initialState: RouteState = {
  route: {
    target: decodeURIComponent(hash) || Object.keys(modules)[0],
    from: 'load',
  },
}

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoute(state, action: PayloadAction<RouteSource>) {
      state.route = action.payload
    },
  },
})
