(function () {
  var host = location.hostname;
  var path = location.pathname;
  var targetHost = host;
  var targetPath = path;
  var changed = false;

  if (host === "m77apk.in") {
    targetHost = "www.m77apk.in";
    changed = true;
  }

  if (/\/index\.html\/?$/i.test(targetPath)) {
    targetPath = targetPath.replace(/\/index\.html\/?$/i, "/") || "/";
    changed = true;
  }

  if (changed) {
    location.replace(
      location.protocol +
        "//" +
        targetHost +
        targetPath +
        location.search +
        location.hash
    );
  }
})();
