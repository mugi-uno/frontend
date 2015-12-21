export default class MainController {
  constructor(mainService) {
    this.label = mainService.getMessage();
  }
}

MainController.$inject = ["MainService"];
