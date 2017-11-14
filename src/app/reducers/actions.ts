import { Action } from '@ngrx/store/src/models';

export const ADD_GIFT = '[GIFT] Add Gift';

export class AddGift implements Action {
    readonly type = ADD_GIFT;
}

export type ALL = AddGift;
