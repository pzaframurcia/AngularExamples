var app = angular.module('app', []);

app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});

function MyController($scope) {
  $scope.click = function(arg) {
    alert('Clicked ' + arg);
  }
  $scope.names = ["Emil", "Tobias", "Linus"];
  $scope.htmlList = "<select ng-model='selectedName' ng-options='item for item in names'></select>";
  $scope.htmlInput = "<input name='campo' ng-model='inputName' ng-required='true' ng-maxlength='5'></input>";
  
   //<input type="text"
  //   ng-model="string"
  //     [name="string"]
  //     [required="string"]
  //     [ng-required="string"]
  //     [ng-minlength="number"]
  //     [ng-maxlength="number"]
  //     [pattern="string"]
  //     [ng-pattern="string"]
  //     [ng-change="string"]
  //     [ng-trim="boolean"]>
}
