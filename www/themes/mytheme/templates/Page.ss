<!doctype html>
<html lang="$ContentLocale">
<head>
  <meta charset="utf-8">
  <title>$Title</title>
  <% base_tag %>
  $MetaTags(false)
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <%-- require ThemedCSS('layout') --%>
  <%-- require themedJavascript('app.js') --%>
</head>
<body>
  <header>
    $SiteConfig.Title
  </header>
  <% include Navigation %>
  <article>
    $Layout
  </article>
</body>
</html>