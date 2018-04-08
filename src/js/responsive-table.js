// JQuery for toggle functionality
(function ($) {
  "use strict";
  $.fn.responsiveTable = function() {

    var toggleColumns = function($table) {
      var selectedControls = [];
      $table.find(".Accordion").each( function() {
        selectedControls.push( $(this).attr("aria-selected") );
      });
      var cellCount = 0, colCount = 0;
      var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Accordion").length );
      $table.find(".Rtable-cell").each( function() {
        $(this).addClass("hidden");
        if( selectedControls[colCount] === "true" ) $(this).removeClass("hidden");
        cellCount++;
        if( cellCount % setNum === 0 ) colCount++;
      });
    };
    $(this).each(function(){ toggleColumns($(this)); });

    $(this).find(".Accordion").click( function() {
      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
      toggleColumns( $(this).parents(".Rtable") );
    });

  };
}(jQuery));


export function tableToggle () {
  $(".js-RtableAccordions").responsiveTable();
}
