/* "On a phone? Send yourself the download link."
   The link is a plain mailto: that opens the visitor's own mail app with the
   download address filled in; nothing is sent to us. Where the phone has a
   share sheet, use that instead, so the link can go to Messages, Notes or
   AirDrop. The line itself is only shown on narrow screens (site.css). */
(function () {
  if (!navigator.share) return;
  var links = document.querySelectorAll("[data-send-to-mac]");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      navigator.share({
        title: "MediaFlowSwift free trial",
        text: "Download the 14-day MediaFlowSwift trial on my Mac",
        url: "https://mediaflowswift.com/download.html"
      }).catch(function () { /* closed the share sheet: nothing to do */ });
    });
  }
})();
