interface Events {
  T?: () => void[];
}

export class EventEmitter<T extends string, R = undefined> {
  private events: Events = {};

  emit(eventName: T, data?: R) {
    const event: (() => void)[] = this.events[eventName as string];

    if (event) {
      event.forEach((fn: () => void) => {
        fn.call(undefined, data);
      });
    }
  }

  subscribe(eventName: T, fn: (res: R) => void): () => void {
    if (!this.events[eventName as string]) {
      this.events[eventName as string] = [];
    }

    this.events[eventName as string].push(fn);

    return () => {
      this.events[eventName as string] = this.events[eventName as string].filter(
        (eventFn: () => void) => fn !== eventFn
      );
    };
  }
}
