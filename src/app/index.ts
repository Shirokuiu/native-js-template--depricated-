import { AppController } from './components';

const $rootContainer = document.body as HTMLElement;
const appController = new AppController($rootContainer);

appController.init();
