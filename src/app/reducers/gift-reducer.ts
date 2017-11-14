import { Gift } from '../gifts/models';
import { Action } from '@ngrx/store';

import * as giftActions from './actions';

export interface State {
    recipients: string[];
    gifts: Gift[];
}

const initialState: State = {
    recipients: ['byron'],
    gifts: [
        {
            recipient: 'byron',
            items: ['ps4']
        }
    ]
};

export function giftReducer(state: State = initialState, action: giftActions.ALL): State {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
