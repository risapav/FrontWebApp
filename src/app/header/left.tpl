<li class="active">
    <a>Home</a>
</li>
<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown">Loader<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a class="request" data-request='{ "c":"app", "e":"lon" }'>Loader on</a></li>
        <li><a class="request" data-request='{ "c":"app", "e":"loff" }'>Loader off</a></li>
    </ul>
</li>
<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown">Role<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="#user">User</a></li>
        <li><a href="#admin">Admin</a></li>
        <li><a href="#super">Super</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{"c":"menu", "e":"role", "o":" User"}'>_User</a></li>
        <li><a class="trigger" data-trigger='{"c":"menu", "e":"role", "o":" Admin"}'>_Admin</a></li>
        <li><a class="trigger" data-trigger='{"c":"menu", "e":"role", "o":" Super"}'>_Super</a></li>    
    </ul>
</li>
<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown">SubApp<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="#app1">SubApp1</a></li>
        <li><a href="#app2">SubApp2</a></li>
        <li><a href="#app3">SubApp3</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "c":"app", "e":"run", "o":"APP1" }'>SubApp1</a></li>
        <li><a class="trigger" data-trigger='{ "c":"app", "e":"run", "o":"APP2" }'>SubApp2</a></li>
        <li><a class="trigger" data-trigger='{ "c":"app", "e":"run", "o":"APP3" }'>SubApp3</a></li>    
    </ul>
</li>
<li><a href="#">Page 2</a></li>
<li><a href="#modal">Modal</a></li>
<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown">{{= role }}<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="#about">Info</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "c":"app", "e":"run", "o":"ABOUT" }'>_Info</a></li>
        <li class="divider"></li>
        <li><a href="/version/">Verzia</a></li>
        <li><a href="/config/">Nastavenie</a></li>
    </ul>
</li>
