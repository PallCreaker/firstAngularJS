var mainCtrl = function($scope){
    $scope.users = [
        {"name" : "fuji", "score" : 23.23 },
        {"name" : "fuji", "score" : 231434.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
        {"name" : "fuji", "score" : 2243433.23 },
    ];
};

var userItemCtrl = function($scope){
    $scope.increment = function(){
        $scope.user.score ++;
    };
};