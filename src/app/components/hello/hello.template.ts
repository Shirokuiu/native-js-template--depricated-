import { Component } from '../../core';

export class HelloTemplate extends Component {
  getTemplate(): string {
    return `
      <div class="hello">
        <h1>Hello world</h1>

        <div class="hello__input-wrap">
          <!-- HelloInputController !-->
        </div>

        <p class="hello__text"></p>
      </div>`.trim();
  }
}
