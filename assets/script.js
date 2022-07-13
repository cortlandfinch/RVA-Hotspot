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

bulmaCarousel.attach('#slider', {
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  pauseonhover: true,
});

var brewery_url = 'https://api.openbrewerydb.org/breweries?by_state=virginia&by_city=richmond&per_page=6'

function getBrew() {
  fetch(brewery_url)
  .then(res => res.json())
  .then(data => {
    brew1.innerHTML = `<div class="bg_carousel" id="brew1">
    <div class="card-content">
      <div class="item__title">
        ${data[0].name}
      </div>
      <div class="item__description">
        ${data[0].street}
      </div>
    </div>
  </div>`
  brew2.innerHTML = `<div class="bg_carousel" id="brew2">
  <div class="card-content">
    <div class="item__title">
      ${data[1].name}
    </div>
    <div class="item__description">
      ${data[1].street}
    </div>
  </div>
</div>`
brew3.innerHTML = `<div class="bg_carousel" id="brew3">
<div class="card-content">
  <div class="item__title">
    ${data[2].name}
  </div>
  <div class="item__description">
    ${data[2].street}
  </div>
</div>
</div>`
brew4.innerHTML = `<div class="bg_carousel" id="brew4">
<div class="card-content">
  <div class="item__title">
    ${data[3].name}
  </div>
  <div class="item__description">
    ${data[3].street}
  </div>
</div>
</div>`
brew5.innerHTML = `<div class="bg_carousel" id="brew5">
<div class="card-content">
  <div class="item__title">
    ${data[4].name}
  </div>
  <div class="item__description">
    ${data[4].street}
  </div>
</div>
</div>`
brew6.innerHTML = `<div class="bg_carousel" id="brew6">
<div class="card-content">
  <div class="item__title">
    ${data[5].name}
  </div>
  <div class="item__description">
    ${data[5].street}
  </div>
</div>
</div>`
  });
}
getBrew();
