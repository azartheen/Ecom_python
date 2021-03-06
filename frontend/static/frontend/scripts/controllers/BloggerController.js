'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('zapyle')
    .controller('BloggerController', function($scope, $http, $routeParams) {
    	$scope.bloggerName = $routeParams.bloggerName;
    	$scope.bloggerDescriptions = { 
	        'priyanka' : "A fashion consultant by day, a dreamer by night, and a traveller at heart, Priyanka’s style is an eclectic mix of the latest, edgy trends and designer scores from all over the world. Her eye for detail, and oodles of attitude is what makes her a true fashionista.",
	        'shivi' : "",
	        'nikita' : "A passionate fashion writer and part time traveller, Nikita’s closet is a bundle of the trending fashion streets of the world. From a super casual look straight out of the streets of London, to the unconventional looks from the fashion streets of Milan, her style is inspired by the mundane and the fabulous.",
    		'kritika' : "A true Gemini at heart, Kritika’s style is dreamy, whimsical and fiercely independent, a fitting mirror of her free spiritedness. Her muses? Colours, prints, flowers and bold accessories.",
    		'himanshi' : "Whether it's high street or formal cocktail, there's one word to describe Himanshi's style: chic. Not one to follow fashion trends blindly, she loves to experiment with unconventional style. Her statement signature? Strong bauble game! You'll never find her look devoid of unique accessories.",
    		'pragya' : "Pragya’s style can be defined as classy with just the right amount of sass. Not one to be limited to designer labels alone, she likes to mix it up with high street brands and of course, her own unique touch. Her style icon is Kate Moss, speaking volumes about how she can pull off red lips just as well as she can a band t-shirt.",
    		'anushka' : "",
    		'aarzoo' : "This fashion blogger admits that she isn’t entirely obsessed with fashion – it’s more a feel-good tool, and the ultimate way of self- expression. Who cares what’s in and what’s out? Not this one! As long as an outfit gets her in tune with herself and gives her that extra boost of confidence, she’s all up for it. Travel, adventures and good people give her an adrenalin rush. Aarzoo’s personal style ranges from chic to classic. She firmly believes nothing can beat a crisp white shirt with a pencil skirt, and her staple string of pearls!",
    		'mahi' : "Being the clotheshorse that she is, Mahi carries off an easy, classic style, both Western and ethnic with equal aplomb. Her wardrobe is packed with every style under the sun, from laidback casual to sexy party wear, and designer garb galore.",
    		'margi' : "",
    		'swati' : "When it comes to clothes, Swati’s goal is to create sartorial eye candy for all to see. A heady mix of statement pieces that are easy to style, with a love for modern ethnic wear, her style is as chic as chic gets.",
    		'ridhima' : "Ridhima loves to experiment with her style! She follows the latest trends, though not without a critical eye. Her closet teems with on-trend and glamorous, but comfortable pieces. When it comes to clothes, she wants the whole shebang - she'll never return home empty-handed post a shopping spree. Being a dentist, she also has a stupendous collection of stylish workwear and comfort clothing, keeping in with her chic personality."
    	
	    };


    });