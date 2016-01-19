"use strict";

/** import some styles */
import "../public/scss/app.scss";

/** import the main app module */
import { default as siteSnap } from "./app.module";

/** bootstrap the application into the document */
angular.element(document).ready(function() {
    angular.bootstrap(document, [siteSnap]);
});

