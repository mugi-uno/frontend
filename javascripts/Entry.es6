import angular from "angular"
import "angular-ui-router"
export var app = angular.module('es6app', []);


// controllers
import MainController from "main.controller"
app.controller("MainController", MainController);

// services
import MainService from "main.service";
import SubService from "sub.service";
app.service('MainService', MainService);
app.service('SubService', SubService);

// directives
import Main from "main";
app.directive("main", Main);

app.run(() => {

});