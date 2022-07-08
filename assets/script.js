var $filters = $(".filters");
var $content = $(".content");

$filters.on("click", "a", function(e) {
  e.preventDefault();

  var id = $(this).attr("href");

  $content.filter(":not([hidden])").attr("hidden", true);

  TweenMax.from(id, 3, {autoAlpha: 0});
  $(id).removeAttr("hidden");

  $filters.find(".active").removeClass("active");

  $(this).addClass("active");
});