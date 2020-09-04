import { Component } from '../../core';

export class HelloInputTemplate extends Component {
  getTemplate(): string {
    return `<input type="text" placeholder="Fill text">`.trim();
  }
}
