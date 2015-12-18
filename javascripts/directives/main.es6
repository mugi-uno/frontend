export default class main {
  constructor() {
    this.restrict = 'E';
    this.scope = {
      amount: '='
    };
    this.template = 'This is a Template ---> {{ctrl.value}}'
  }

  static activate() {
    main.instance = new main();
    return main.instance;
  }
}

