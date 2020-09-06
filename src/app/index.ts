import { AppController } from './components';

const $rootContainerRef = document.body as HTMLElement;
const appController = new AppController($rootContainerRef);

appController.init();
