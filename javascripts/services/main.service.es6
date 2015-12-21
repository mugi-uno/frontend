class MainService {
  constructor(sub) {
    this.sub = sub;
  }

  getMessage() {
    return this.sub.sub()
  }
}

MainService.$inject = ['SubService'];

export default (SubService) => new MainService(SubService);
