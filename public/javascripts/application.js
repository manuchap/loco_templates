function updateMember() {
  var nick = document.getElementById('nick').value;
  var firs = document.getElementById('firs').value;
  var last = document.getElementById('last').value;
  var desc = document.getElementById('desc').value;
  var file = document.getElementById('file').value;
  var yurl = "/saving?nick=" + nick + "&firs=" + firs + "&last=" + last + "&desc=" + desc + "&file=" + file;
  window.location = yurl;
}
