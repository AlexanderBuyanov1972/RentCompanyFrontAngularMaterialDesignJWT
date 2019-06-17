import {State} from './State';

export interface Car {
  regNumber: string;
  color: string;
  inUse: boolean;
  flRemoved: boolean;
  modelName: string;
  state: State;

}
