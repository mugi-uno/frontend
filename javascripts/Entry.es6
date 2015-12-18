import angular from "angular"
import "angular-ui-router"

export var app = angular.module('es6app', []);

import main from "main";

//import main from 'main';

app.directive(main.name, [main]);

app.run([], () => {

});