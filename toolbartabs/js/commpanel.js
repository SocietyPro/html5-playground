$(document).ready(function () {
    var tabs = $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function () {
            tabs.tabs("refresh");
        }
    });

    $('.components, .componentOptions').sortable({
        revert: true,
        connectWith: '.connectedComponents'
    });

    $('.options').sortable({
        revert: true
    });

    

    $('#tabs').droppable({
        activeClass: "ui-state-highlight",
        drop: function (event, ui) {
            //var num_tabs = $("div#tabs ul li").length + 1;

            //$("div#tabs ul").append(
              //  "<li><a href='#tab" + num_tabs + "'>" + ui.draggable.text() + "</a></li>");
            //$("div#tabs").append(
              //  "<div id='tab" + num_tabs + "'>#" + num_tabs + "</div>");
            //$("div#tabs").tabs("refresh");
           // $(ui.draggable).remove()
        }
    });

});