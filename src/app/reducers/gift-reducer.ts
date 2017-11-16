import { Gift } from '../gifts/models';
import { Action } from '@ngrx/store';

import * as giftActions from './actions';

export interface State {
    ids: string[];
    entities: { [key: string]: Gift };
    // means to have one object, named entities with any number
    // of properties as long as said properties has a
    // string for the key and a 'Gift' object for the value
}

const initialState: State = {
    ids: ['byron', 'aziza'],
    entities: {
        'byron' : { recipient: 'byron', items: ['ps4'] },
        'aziza' : { recipient: 'aziza', items: ['ipad', 'camera']}
    }
};

export function giftReducer(state: State = initialState, action: giftActions.ALL): State {
    switch (action.type) {
        case giftActions.ADD_GIFT: {
            if (state.ids.find(i => action.gift.recipient === i)) {
                // only update items[] but to specific recipient
                return Object.assign({}, state, {
                    entities: {
                        ...state.entities,
                        [action.gift.recipient] : { recipient: action.gift.recipient, items: [
                            ...action.gift.items,
                            ...state.entities[action.gift.recipient].items
                        ]}
                    }
                });
            } else {
                // add a new id and entity based on new person
                return Object.assign({}, state, {
                    ids: [...state.ids, action.gift.recipient],
                    entities: {
                        ...state.entities,
                        [action.gift.recipient] : { recipient: action.gift.recipient, items: action.gift.items}
                    }
                });
            }
        }
        default: {
            return state;
        }
    }
}
