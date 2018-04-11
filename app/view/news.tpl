<!-- app/view/account.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/base.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.id }}">{{ helper.addPrefix(item.name) }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>