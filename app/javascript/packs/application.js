// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import "datatables"

//= require jquery
//= require popper
//= require turbolinks
//= require bootstrap
//= require_tree
//= require select2

require("@rails/ujs").start()
require('jquery')
// require("jquery-ui")

import $ from "jquery"

// import jstree from 'jstree/src/jstree.js'
import dt from 'datatables.net-dt';
 
 $(document).ready(function(){
    $("#orderTable").DataTable();
    

  });

    // In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

