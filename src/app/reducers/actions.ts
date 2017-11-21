import { Action } from '@ngrx/store/src/models';
import { Gift } from '../gifts/models/gift.interface';

export const ADD_GIFT = '[GIFT] Add Gift';
export class AddGift implements Action {
    readonly type = ADD_GIFT;
    constructor(public gift: Gift) { }
}


export type ALL = AddGift;
