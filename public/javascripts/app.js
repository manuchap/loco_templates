$(document).ready(function() {
  var appendToContainer = function(htmlele, record) {
    console.log(record)
  };
  var FJS = FilterJS(formations, "#formations", {
    template: "#formation-template",
    search: {
      fields: ['titre'],
      ele: "#searchbox"
    },
    callbacks: {
      afterFilter: function(result) {
        $("#total_formations").text(result.length);
        $("#grid").click(function(){
          $("[id^=fjs_]").removeClass('col-md-12').addClass('col-md-4');
          $("[class*=detail]").removeClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $("[class$=rating]").removeClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $(".hrfiche").removeClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $(".voir").addClass('text-center');
        });
        $("#list").click(function(){
          $("[id^=fjs_]").removeClass('col-md-4').addClass('col-md-12');
          $("[class*=detail]").addClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $("[class$=rating]").addClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $(".hrfiche").addClass('hidden-lg hidden-md hidden-sm hidden-xs');
          $(".voir").removeClass('text-center');
        });
      }
    }
  });
  FJS.addCallback("beforeAddRecords", function() {
    if (this.recordsCount >= 0) {
      this.stopStreaming()
    }
  });
  FJS.addCallback("afterAddRecords", function() {
    var percent = (this.recordsCount - 250) * 100 / 250;
    $("#stream_progress").text(percent + "%").attr("style", "width: " + percent + "%;");
    if (percent == 100) {
      $("#stream_progress").parent().fadeOut(1000)
    }
  });
  FJS.addCriteria({
    field: "cp",
    ele: "#dep_filter",
    type: "select",
    all: "all"
  });
  FJS.addCriteria({
    field: "domaine",
    ele: "#dom_filter",
    type: "select",
    all: "all"
  });
  FJS.addCriteria({
    field: "niveau",
    ele: "#lvl_filter",
    type: "select",
    all: "all"
  });
  FJS.setStreaming({
    data_url: "json/ajaxfilter.json",
    stream_after: 1,
    batch_size: 50
  });

  window.FJS = FJS
});
