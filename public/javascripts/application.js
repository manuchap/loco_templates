function updateMember() {
  var nick = document.getElementById('nick').value;
  var firs = document.getElementById('firs').value;
  var last = document.getElementById('last').value;
  var desc = document.getElementById('desc').value;
  var yurl = "/saving?nick=" + nick + "&firs=" + firs + "&last=" + last + "&desc=" + desc;
  window.location = yurl;
}
