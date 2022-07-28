// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require semantic-ui
//= require jquery
//= require semantic-ui-sass

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@doabit/semantic-ui-sass'
// $(document).on('turbolinks:load', function(){
//     $('.ui.dropdown').dropdown();
// })

$(document).on('turbolinks:load', function(){
    console.log("check");
});

$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  // submit_message();
  // scroll_bottom();
});