
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// function click(e) {
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
 
// }

// document.addEventListener('DOMContentLoaded', function () {

//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });


document.addEventListener('DOMContentLoaded', function () {
// $("#pink_button").click(function(event){
// 	event.preventDefault();
// 	event.hide();
// })

		// $("#test_button").click(function(event){
		// 	event.preventDefault();
		// 	console.log("hello there")	
		// })

		$("#forgot_pass_link").click(function(event){
			event.preventDefault();
			// console.log("hello there");
			//  var newURL = "http://google.com";
			// chrome.window.create({url: newURL})
			 window.open("https://client.my-private-network.co.uk/pwreset.php")	 

		})

		$("#sign_up_button").click(function(){
				window.open("https://client.my-private-network.co.uk/clientarea.php")

		})

});

 // $(".hewothere").click(function () {
//       // $("#laptop").hide();