(function () {
    angular.module("myApp", [])
        .controller('myController',myController);
    function myController(){
        var myCtrl = this;
        this.toDoList = [{toDoText:"Make breakfast", done:false}, {toDoText:"Walk Tajar", done:false}, {toDoText:"Do laundry", done:false}, ]
        
    }
    

    $scope.todoList = [{todoText:'Clean House', done:false},{todoText:'Clean House2', done:false}];



        $scope.strike = function() {
        var oldList = $scope.todoList;
        angular.forEach(oldList, function(x) {
            if (!x.done) x.todoText.class="strike";
        });
    };
});
})();