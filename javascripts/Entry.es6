import angular from "angular"
import "angular-ui-router"

import main from "main";

export var app = angular.module('es6app', []);

app.directive(main.name, main.activate);

app.run(() => {

});