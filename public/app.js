(function () {
    angular.module('angular-file-upload', ['blueimp.fileupload', 'ngAnimate', 'toastr'])
        .constant('url', 'https://upload.wistia.com')
        .constant('mediaUrl', 'https://api.wistia.com/v1/medias.json')
        .constant('password', 'fea3242af4a2cc3075240f6bd665bd16124a5deab54e951d39210a5c7aad22c2')
        .constant('namePrefix', 'wistia_video_')
        .constant('embededUrl', 'https://fast.wistia.net/embed/iframe')
        .controller('MainController', ['$scope', function($scope) {
            var self = this;
            
        }]);
})();