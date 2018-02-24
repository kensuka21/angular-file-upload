describe('File Upload Component', function () {
    var $compile,
        $rootScope,
        $controller,
        $httpBackend,
        $componentController,
        apiPassword;

    beforeEach(module('angular-file-upload'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$controller_, $injector, _$componentController_, password) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = $injector.get('$httpBackend');
        $componentController = _$componentController_;
        apiPassword = password;
    }));


    it('FIle Upload Component should be defined', function () {
        var element = angular.element('<ng-file-upload></ng-file-upload>');
        var scope = $rootScope.$new();
        var component = $compile(element)(scope);
        expect(component).toBeDefined();
    });

    it('When execute fileuploadadd event should clear video list in queue', function () {
        var data = { scope: { queue: [{}] } };
        scope = $rootScope.$new();
        controller = $componentController('ngFileUpload', {
            $scope: scope
        });

        $rootScope.$broadcast('fileuploadadd', data);
        expect(data.scope.queue).toEqual([])
        expect(scope.showEmbededVideo).toEqual(false);
        expect(scope.showVideoThumbnailPreview).toEqual(false);
    });

    it('When execute fileuploaddone event should get the video', function () {
        var expectedData = [
            {
                progress: 100,
                thumbnail: {
                    url: ''
                }
            }
        ]

        var data = { scope: { queue: [{}] }, result: { hashed_id: '' } };

        scope = $rootScope.$new();
        controller = $componentController('ngFileUpload', {
            $scope: scope
        });

        $httpBackend.when('GET', 'https://api.wistia.com/v1/medias.json?api_password=' + apiPassword + '&hashed_id=')
            .respond(expectedData);
        $rootScope.$broadcast('fileuploaddone', data);
        $httpBackend.flush();

        expect(scope.showEmbededVideo).toEqual(true);
    });
});