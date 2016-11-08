todoApp.controller("ToDoCtrl", function ($scope) {
    $scope.todo = model;
    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) {
                count++
            }
        });
        return count;
    }
});