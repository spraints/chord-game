$(function() {
  $(document).on("click", ".music-key", function() { chooseKey(this.hash) })
  $(document).on("click", ".random-key", function(e) { chooseRandomKey(); e.preventDefault() })
  $(document).on("click", ".start-game", function(e) { startGame(); e.preventDefault() })

  $(".playlist-item").prepend($('<span class="current-key"></span>'))
  chooseKey(location.hash)
});

function chooseKey(hash) {
  var key = $(".music-key").filter(function() { return this.hash == hash })
  if (key.length == 1) {
    location.hash = hash
    $(".current-key").text(key.text())
    $("body").addClass("playable")
  } else {
    $("body").removeClass("playable")
  }
}

function chooseRandomKey() {
  chooseKey(randomElement($(".music-key")).hash)
}

function randomElement(coll) {
  return coll[Math.floor(coll.length * Math.random())]
}

function startGame() {
  var body = $("body")
  body.addClass("playing")
  setTimeout(function() { body.removeClass("playing") }, 5000)
}
