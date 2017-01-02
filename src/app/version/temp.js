/**
 * Module representing a template.
 * @module
 * @param {type} VersionTpl
 * @param {type} LayoutTpl
 * @returns {object}
 */
define(['text!apps/version/version.html','text!apps/version/layout.html'],
function (VersionTpl, LayoutTpl) {
    'use strict';

    return {
        'version': VersionTpl,
        'layout': LayoutTpl
    };
});


