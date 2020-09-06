import { ViewComponent } from './view-component';

export abstract class Controller {
  public views: ViewComponent[];
  public controllers: Controller[];

  public set setViews(viewsComponent: ViewComponent[]) {
    if (!this.views) {
      this.views = [];
    }

    this.views = [...this.views, ...viewsComponent];
  }

  public set setControllers(controllers: Controller[]) {
    if (!this.controllers) {
      this.controllers = [];
    }

    this.controllers = [...this.controllers, ...controllers];
  }

  public destroy(): void {
    this.checkRegisterComponents();

    if (this.views.length) {
      this.views.forEach((view: ViewComponent) => {
        view.removeElement();
      });
      this.views = undefined;
    }

    if (this.controllers.length) {
      this.controllers.forEach((controller: Controller) => {
        controller.destroy();
      });
      this.controllers = undefined;
    }
  }

  private checkRegisterComponents(): void {
    if (!this.views && !this.controllers) {
      throw new Error(
        `Can't destroy Controller, views and controllers variables is undefined in Controller component`
      );
    }

    if (!this.views) {
      throw new Error(
        `Can't destroy Controller, views variable is undefined in Controller component`
      );
    }

    if (!this.controllers) {
      throw new Error(
        `Can't destroy Controller, controllers variable is undefined in Controller component`
      );
    }
  }
}
