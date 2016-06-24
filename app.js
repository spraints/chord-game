$(function() {
  $(document).on("click", ".music-key", function() { chooseKey(this.hash) })
  $(document).on("click", ".random-key", function(e) { chooseRandomKey(); e.preventDefault() })

  $(".playlist-item").prepend($('<span class="current-key"></span>'))
  chooseKey(location.hash)
});

function chooseKey(hash) {
  var key = $(".music-key").filter(function() { return this.hash == hash })
  if (key) {
    location.hash = hash
    $(".current-key").text(key.text())
    $(".playlist").show()
  } else {
    $(".playlist").hide()
  }
}

function chooseRandomKey() {
  chooseKey(randomElement($(".music-key")).hash)
}

function randomElement(coll) {
  return coll[Math.floor(coll.length * Math.random())]
}
