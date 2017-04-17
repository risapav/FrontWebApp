<li><a><span class="glyphicon glyphicon-user"></span>{{= role }}</a></li>

<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown">
        <span class="glyphicon glyphicon-log-in"></span> 
        <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
        <li><a class="request" data-request='{ "c":"login", "e":"ping" }'>Ping</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "c":"login", "e":"login" }'>Prihlásiť</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "c":"login", "e":"logout" }'>Odhlásiť</a></li>
    </ul>
</li>