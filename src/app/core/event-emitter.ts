export class EventEmitter<T = undefined> {
  private event: ((res: T) => void)[];

  emit(data?: T) {
    const event: (() => void)[] = this.event as (() => void)[];

    if (event) {
      event.forEach((fn: () => void) => {
        fn.call(undefined, data);
      });
    }
  }

  subscribe(fn: (res: T) => void): () => void {
    if (!this.event) {
      this.event = [] as (() => void)[];
    }

    this.event.push(fn);

    return () => {
      this.event = this.event.filter((eventFn: (res: T) => void) => fn !== eventFn);
    };
  }
}
