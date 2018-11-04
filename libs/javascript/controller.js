app.controller("mainctrl", ($scope, myfactory)=>{
    $scope.isValid= false;
    $scope.game = false;
    var buttons = myfactory.createButtons();
    $scope.buttons = buttons;
    $scope.load= ()=>{
        location.href = "index.html";
    }
    $scope.clickEvent = (position)=>{
        var text = myfactory.writeButton(position);
        if(text){
            $scope.message = text;
            $scope.isValid= true;
            $scope.game = true;
        }
    }
})