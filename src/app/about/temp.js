define([
    'text!apps/about/about.html',
    'text!apps/about/layout.html'
],
    function (AboutTpl, LayoutTpl) {
        'use strict';

        return {
            'about': AboutTpl,
            'layout': LayoutTpl
        };
    }
);


