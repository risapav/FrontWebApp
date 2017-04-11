<li class="active"><a>Home</a></li>
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown">Funkcie <span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a class="request" data-request='{ "ch":"app", "ev":"app:lon" }'>Loader on</a></li>
    <li><a class="request" data-request='{ "ch":"app", "ev":"app:loff" }'>Loader off</a></li>
  </ul>
</li>
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown">Role<span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#user">User</a></li>
    <li><a href="#admin">Admin</a></li>
    <li><a href="#super">Super</a></li>
  </ul>
</li>
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown">Page 1 <span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/login/">Login</a></li>
    <li><a href="/logout/">Logout</a></li>
    <li><a href="/user/">User</a></li>
  </ul>
</li>
<li><a href="#">Page 2</a></li>
<li><a href="#modal">Modal</a></li>
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown">{{= role }}<span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="/about/">Info</a></li>
    <li><a href="/version/">Verzia</a></li>
    <li><a href="/config/">Nastavenie</a></li>
  </ul>
</li>
