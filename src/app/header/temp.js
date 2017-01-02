/**
 * Module representing a template.
 * @module
 * @param {type} LayoutTpl
 * @param {type} Menu0Tpl
 * @param {type} Menu1Tpl
 * @param {type} Menu2Tpl
 * @param {type} TimeTpl
 * @returns {object}
 */
define([
    'text!apps/header/layout.html',
    'text!apps/header/menu_0.html',
    'text!apps/header/menu_1.html',
    'text!apps/header/menu_2.html',
    'text!apps/header/time.html'
],
    function (LayoutTpl, Menu0Tpl, Menu1Tpl, Menu2Tpl, TimeTpl) {
        'use strict';

        return  {
            'layout': LayoutTpl,
            'menu0': Menu0Tpl,
            'menu1': Menu1Tpl,
            'menu2': Menu2Tpl,
            'time': TimeTpl
        };
    }
);


