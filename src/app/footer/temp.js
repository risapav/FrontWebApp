/**
 * @copyright (c) 2015
 * @author Pavol Riša
 * Module representing a template.
 * @module
 * @param {type} CopyTpl
 * @returns {object}
 */
define(['text!apps/footer/copy.html'],
    function (CopyTpl) {
        'use strict';

        return {
            'copy': CopyTpl
        };
    }
);