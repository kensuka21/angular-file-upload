(function () {
	angular.module('angular-file-upload')
		.component('ngFileUpload', {
			templateUrl: 'components/file-upload/file-upload.component.html',
			controller: FileUploadController,
		});

	function FileUploadController($scope, fileUpload, url,
		mediaUrl, password, namePrefix, embededUrl, $http, toastr, $timeout, $sce) {

		$scope.embededVideoUrl = '';
		$scope.showEmbededVideo = false;
		$scope.videoThumbnailPreviewUrl = '';
		$scope.showVideoThumbnailPreview = false;
		$scope.embededProgress = '';

		$scope.options = {
			url: url,
			maxFileSize: 5000000,
			type: "POST",
			autoUpload: true,
			dataType: 'json',
			paramName: 'file',
			formData: [{
				name: 'api_password',
				value: password
			}, {
				name: 'name',
				value: namePrefix + new Date().getTime()
			}]
		};

		$scope.$on('fileuploaddone', function (e, data) {
			data.scope.queue = [];

			var hashedId = data.result.hashed_id;
			var params = {
				api_password: password,
				hashed_id: hashedId
			};

			$scope.embededVideoUrl = $sce.trustAsResourceUrl(embededUrl + '/' + hashedId);

			$http.get(mediaUrl, { params: params }).then(handleSuccess, error);

			function handleSuccess(response) {
				var progress = parseInt(response.data[0].progress * 100, 10);
				$scope.videoThumbnailPreviewUrl = response.data[0].thumbnail.url;
				$scope.showVideoThumbnailPreview = true;

				if (progress < 100) {
					$scope.embededProgress = progress;

					$timeout(function () {
						$http.get(mediaUrl, { params: params }).then(handleSuccess, error);
					}, 1000);

					return;
				}

				$scope.showEmbededVideo = true;
				$scope.showVideoThumbnailPreview = false;
			}

			function error(response) {
				toastr.error(response.result.error, 'Error !');
			}
		});

		$scope.$on('fileuploadfail', function (e, data) {
			toastr.error(data.result.error, 'Error !');
			data.scope.queue = [];
		});

		$scope.$on('fileuploadadd', function (e, data) {
			data.scope.queue = [];
			$scope.showEmbededVideo = false;
			$scope.showVideoThumbnailPreview = false;
		});
	}
})();