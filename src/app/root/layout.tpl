<!--
Copyright (c) 2010-2016 Pavol Risa
All rights reserved

A marionettejs javascript demo application.
Works at frontend browser side
Compiled under Webpack 2 tools
-->

<!--aria-labelledby="exampleModalLabel" aria-hidden="true"
 aria-labelledby="myModalLabel" aria-hidden="false"-->
<div id="dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>
<!-- loader -->
<div class="loader" style="display:none;"></div>
<!-- Fixed navbar -->
<!-- <nav class="navbar navbar-inverse"> -->
<nav id="header" class="navbar navbar-default navbar-fixed-top">Loading... header</nav>
  
<div class="container">
  <h3>Collapsible Navbar</h3>
  <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).
  <p>Only when the button is clicked, the navigation bar will be displayed.</p>
</div>


<!-- Begin page content -->
<div id="main" class="container">
Loading... main
  <div class="page-header">
    <h1>Sticky footer with fixed navbar</h1>
  </div>
  <p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
  <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
</div>

<footer id="footer" class="footer">Loading... footer</footer>