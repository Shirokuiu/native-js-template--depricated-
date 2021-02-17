import { EventEmitter } from '../../../core';

export class AppStateService {
  readonly onTotalCountEmit = new EventEmitter<number>();

  totalCount = 0;

  inc(): void {
    this.totalCount += 1;
    this.onTotalCountEmit.emit(this.totalCount);
  }

  dec(): void {
    this.totalCount -= 1;
    this.onTotalCountEmit.emit(this.totalCount);
  }
}
