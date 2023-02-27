import { createSelector } from 'reselect';

import { UserState } from './user.reducer';

export const SelectUserReducer = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
    SelectUserReducer,
    (user) => user.currentUser
);