import { ActionReducerMap } from '@ngrx/store';
import * as gifts from './gift-reducer';

export interface State {
    giftState: gifts.State;
}

export const reducers: ActionReducerMap<State> = {
    giftState: gifts.giftReducer
};
