class Main {
  constructor() {
    this.restrict = 'E';
    this.template = require('main.html')
  }
}

export default () => new Main();