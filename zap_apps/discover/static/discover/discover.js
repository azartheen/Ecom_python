zapyle.controller('DiscoverController', function($scope, $http, admireService) {
	$scope.get_discover_datas = function(){
    
        $http({
         	method: 'GET',
        	url: '/discover/?ajax=true',
        }).then(function successCallback(response) {
            // console.log(response.data.data)
            $scope.discover_data = response.data.data

        });
    }
    $scope.get_discover_datas()

    // $scope.discover_data = {"status":"success","data":[{"id":1,"content_data":{"discover_type":"banner","discover_data":{"title":"","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/exclusive.jpg","action":{"id":1,"android_activity":"FeedPage","action_type":"filtered","ios_target":"zap_curated/","android_target":"/filters/getProducts/1/an/zap_curated/","website_target":""},"image_resolution":{"width":1000,"height":640}}},"importance":1,"banner":1},{"id":2,"content_data":{"discover_type":"message","discover_data":{"id":1,"title":"","description":"Authentic luxury fashion handpicked by Zapyle","background_color":"FBFBFB","text_color":"B7B7B7"}},"importance":2,"message":1},{"id":3,"content_data":{"discover_type":"banner","discover_data":{"title":"","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/market.jpg","action":{"id":2,"android_activity":"FeedPage","action_type":"filtered","ios_target":"zap_market/","android_target":"/filters/getProducts/1/an/zap_market/","website_target":""},"image_resolution":{"width":1000,"height":640}}},"importance":3,"banner":2},{"id":4,"content_data":{"discover_type":"message","discover_data":{"id":2,"title":"","description":"Authentic luxury finds from the closets of India's most fashionable women.","background_color":"FBFBFB","text_color":"B7B7B7"}},"importance":4,"message":2},{"id":5,"content_data":{"discover_type":"product_collection","discover_data":{"title":"Now Trending","product":[{"original_price":14000.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160726/c12819cd-ae6.500x500.jpg","listing_price":9920.0,"id":2471,"title":"Michael Kors wallet"},{"original_price":32000.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/original/684be95f-9f3.500x500.jpg","listing_price":13500.0,"id":1253,"title":"Anuradha Vakil"},{"original_price":7500.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160721/360b41f2-332.500x500.jpg","listing_price":3499.0,"id":2415,"title":"Plain Colour Block Mesh Panel Maxi Dress"},{"original_price":12100.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/original/5154a32c-4b8.500x500.jpg","listing_price":6500.0,"id":991,"title":"Gucci Sunglasses"},{"original_price":14500.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/original/ad91f26a-ff1.500x500.jpg","listing_price":10000.0,"id":1827,"title":"Michael kors wallet"}]}},"importance":5,"product_collection":1},{"id":6,"content_data":{"discover_type":"custom_collection","discover_data":{"title":"Collections","collection":[{"title":"Saturday Night Out","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/saturdaynightout.jpg","action":{"id":4,"android_activity":"FeedPage","action_type":"filtered","ios_target":"?occasion=5","android_target":"/filters/getProducts/1/an/?occasion=5","website_target":""},"image_resolution":{"width":800,"height":500}},{"title":"Travel","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/travel.jpg","action":{"id":5,"android_activity":"FeedPage","action_type":"filtered","ios_target":"?occasion=9","android_target":"/filters/getProducts/1/an/?occasion=9","website_target":""},"image_resolution":{"width":800,"height":500}},{"title":"Ethnic","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/ethnic.jpg","action":{"id":3,"android_activity":"FeedPage","action_type":"filtered","ios_target":"?product_category=1,3,4,5,6,7,8,10","android_target":"/filters/getProducts/1/an/?product_category=1,3,4,5,6,7,8,10","website_target":""},"image_resolution":{"width":800,"height":500}}]}},"importance":6,"custom_collection":1},{"id":7,"content_data":{"discover_type":"product_collection","discover_data":{"title":"Steal Deals","product":[{"original_price":20253.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160726/528e0887-8fd.500x500.jpg","listing_price":7999.0,"id":2468,"title":"Coach"},{"original_price":24000.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160725/ef056ce4-1e2.500x500.jpg","listing_price":13200.0,"id":2451,"title":"Furla"},{"original_price":2450.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160714/f0267a44-028.500x500.jpg","listing_price":950.0,"id":2350,"title":"Pankaj & Nidhi For Koovs"},{"original_price":50000.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/20160701/cca1b195-095.500x500.jpg","listing_price":9000.0,"id":2281,"title":"Giuseppe"},{"original_price":7500.0,"image":"https://prod.zapyle.com/zapmedia/uploads/product_images/original/f0ffb1c7-217.500x500.jpg","listing_price":4000.0,"id":1797,"title":"Sweatshirt by Juicy Couture"}]}},"importance":7,"product_collection":2},{"id":8,"content_data":{"discover_type":"banner","discover_data":{"title":"","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/banner/Discover3.jpg","action":{"id":6,"android_activity":"FeedPage","action_type":"filtered","ios_target":"?user_price=1-5000&selected_price=1-5000","android_target":"/filters/getProducts/1/an/?user_price=1-5000&selected_price=1-5000","website_target":""},"image_resolution":{"width":1000,"height":640}}},"importance":8,"banner":6},{"id":9,"content_data":{"discover_type":"generic","discover_data":{"title":"Invite your fashion pals","image":"https://prod.zapyle.com/zapmedia/uploads/homepage_images/generic/Discover4.jpg","description":"Share your love for fashion. Invite a friend to Zapyle and earn cash on her first purchase.","cta":{"id":1,"text":"Invite Friends","background_color":"FF5578","text_color":"FFEBEF"},"action":{"id":7,"android_activity":"EarnCash","action_type":"earn_cash","ios_target":"","android_target":"","website_target":""},"image_resolution":{"width":1000,"height":640}}},"importance":9,"generic":1}]}
    // $scope.discover_data = $scope.discover_data['data']
    $scope.admire = function(data){
        if(ZL == 'True'){
            data.admired=!data.admired
            if (data.admired){
                admireService.postadmire(data.id,'admire');
            }
            else{
                admireService.postadmire(data.id,'unadmire');
            }
        }else{
            $scope.$emit('setLoginPurpose', 'admire a user' );
            $('.right_panel_inner > div').removeClass('is_visible');
            $($('.login_label').attr('data-activates')).addClass('is_visible');
            $('.right_panel').addClass('is_visible');
        }
    }
})