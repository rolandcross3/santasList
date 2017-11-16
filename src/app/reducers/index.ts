import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as gifts from './gift-reducer';

export interface State {
    giftState: gifts.State;
}

export const reducers: ActionReducerMap<State> = {
    giftState: gifts.giftReducer
};

const selectGiftBranch = (state: State) => state.giftState;

export const selectAllGifts = createSelector(selectGiftBranch, b => b.ids.map(i => b.entities[i]));
