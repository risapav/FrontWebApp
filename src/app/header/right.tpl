<li><a><span class="glyphicon glyphicon-user"></span>{{= role }}</a></li>

<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span> <!--Prihlásenie --><span class="caret"></span><!-- x--></a>
    <ul class="dropdown-menu">
        <li><a class="request" data-request='{ "ch":"login", "ev":"ping" }'>Ping</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "ch":"login", "ev":"login" }'>Prihlásiť</a></li>
        <li class="divider"></li>
        <li><a class="trigger" data-trigger='{ "ch":"login", "ev":"logout" }'>Odhlásiť</a></li>
    </ul>
</li>