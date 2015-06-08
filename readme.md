# Hyperion Style Guide

*Heavily inspired from [this AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide)*

## Table of Contents

  1. [Single Responsibility](#single-responsibility)
  1. [IIFE](#iife)
  1. [Modules](#modules)
  1. [Controllers](#controllers)
  1. [Factories](#factories)
  1. [Data Services](#data-services)
  1. [Directives](#directives)
  1. [Manual Annotating for Dependency Injection](#manual-annotating-for-dependency-injection)
  1. [Naming](#naming)
  1. [Angular $ Wrapper Services](#angular--wrapper-services)
  1. [Testing](#testing)
  1. [Comments](#comments)
  1. [Constants](#constants)

## Single Responsibility

### Rule of 1
###### [Style [Y001](#style-y001)] 

  Define 1 component per file.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y001)

## IIFE
### JavaScript Closures
###### [Style [Y010](#style-y010)]

  Wrap AngularJS components in an Immediately Invoked Function Expression (IIFE).

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y010)

## Modules

### Definitions (aka Setters)
###### [Style [Y021](#style-y021)]

  Declare modules without a variable using the setter syntax.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y021)

### Getters
###### [Style [Y022](#style-y022)]

  When using a module, avoid using a variable and instead use chaining with the getter syntax.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y022)

### Setting vs Getting
###### [Style [Y023](#style-y023)]

  Only set once and get for all other instances.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y023)

## Controllers

### Bindable Members Up Top
###### [Style [Y033](#style-y033)]

  - Place bindable members at the top of the controller, alphabetized, and not spread through the controller code.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y033)

### Function Declarations to Hide Implementation Details
###### [Style [Y034](#style-y034)]

  Use function declarations to hide implementation details. Keep your bindable members up top. When you need to bind a function in a controller, point it to a function declaration that appears later in the file. This is tied directly to the section Bindable Members Up Top. For more details see [this post](http://www.johnpapa.net/angular-function-declarations-function-expressions-and-readable-code).

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y034)

### Defer Controller Logic
###### [Style [Y035](#style-y035)]

  Defer logic in a controller by delegating to services and factories.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y035)

### Keep Controllers Focused
###### [Style [Y037](#style-y037)]

  Define a controller for a view, and try not to reuse the controller for other views. Instead, move reusable logic to factories and keep the controller simple and focused on its view.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y037)

## Factories

### Accessible Members Up Top
###### [Style [Y052](#style-y052)]

  Expose the callable members of the service (its interface) at the top, using a technique derived from the [Revealing Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript).

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y052)

### Function Declarations to Hide Implementation Details
###### [Style [Y053](#style-y053)]

  Use function declarations to hide implementation details. Keep your accessible members of the factory up top. Point those to function declarations that appears later in the file. For more details see [this post](http://www.johnpapa.net/angular-function-declarations-function-expressions-and-readable-code).

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y053)

## Data Services

### Separate Data Calls
###### [Style [Y060](#style-y060)]

  Refactor logic for making data operations and interacting with data to a factory. Make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y060)

### Return a Promise from Data Calls
###### [Style [Y061](#style-y061)]

  When calling a data service that returns a promise such as $http, return a promise in your calling function too.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y061)

## Directives
### Limit 1 Per File
###### [Style [Y070](#style-y070)]

  Create one directive per file. Name the file for the directive.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y070)

### Manipulate DOM in a Directive
###### [Style [Y072](#style-y072)]

  When manipulating the DOM directly, use a directive. If alternative ways can be used such as using CSS to set styles or the [animation services](https://docs.angularjs.org/api/ngAnimate), Angular templating, [`ngShow`](https://docs.angularjs.org/api/ng/directive/ngShow) or [`ngHide`](https://docs.angularjs.org/api/ng/directive/ngHide), then use those instead. For example, if the directive simply hides and shows, use ngHide/ngShow.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y072)

### Provide a Unique Directive Prefix
###### [Style [Y073](#style-y073)]

All of the custom made directives must start with the  `hyp` prefix.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y073)

### Restrict to Elements and Attributes
###### [Style [Y074](#style-y074)]

  When creating a directive that makes sense as a stand-alone element, allow restrict `E` (custom element) and optionally restrict `A` (custom attribute). Generally, if it could be its own control, `E` is appropriate. General guideline is allow `EA` but lean towards implementing as an element when it's stand-alone and as an attribute when it enhances its existing DOM element.

  Note: EA is the default for AngularJS 1.3 +

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y074)

### Route Resolve Promises
###### [Style [Y081](#style-y081)]

  When a controller depends on a promise to be resolved before the controller is activated, resolve those dependencies in the `$routeProvider` before the controller logic is executed. If you need to conditionally cancel a route before the controller is activated, use a route resolver.

  Use a route resolve when you want to decide to cancel the route before ever transitioning to the View.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y081)

## Manual Annotating for Dependency Injection

### UnSafe from Minification
###### [Style [Y090](#style-y090)]

  Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y090)

## Naming

### Naming Guidelines
###### [Style [Y120](#style-y120)]

  Use the following pattern for all the components: `feature.type.js`

### Test File Names
###### [Style [Y122](#style-y122)]

  Name test specifications similar to the component they test with a suffix of `spec`.

### Controller Names
###### [Style [Y123](#style-y123)]

  Use consistent names for all controllers named after their feature. Use UpperCamelCase for controllers, as they are constructors.

### Controller Name Suffix
###### [Style [Y124](#style-y124)]

  Append the controller name with the suffix `Ctrl`.

### Factory Names
###### [Style [Y125](#style-y125)]

  Use consistent names for all factories named after their feature. Use camel-casing for services and factories.

### Directive Component Names
###### [Style [Y126](#style-y126)]

  Use consistent names for all directives using camel-case. Use the following short prefix `hyp`.

### Modules
###### [Style [Y127](#style-y127)]

  When there are multiple modules, the main module file is named `app.module.js` while other dependent modules are named after what they represent. For example, an admin module is named `admin.module.js`. The respective registered module names would be `app` and `admin`.
  
[Read more](https://github.com/johnpapa/angularjs-styleguide#style-y127)

### Configuration
###### [Style [Y128](#style-y128)]

  Separate configuration for a module into its own file named after the module. A configuration file for the main `app` module is named `app.config.js` (or simply `config.js`). A configuration for a module named `admin.module.js` is named `admin.config.js`.

### Routes
###### [Style [Y129](#style-y129)]

  Separate route configuration into its own file. Examples might be `app.route.js` for the main module and `admin.route.js` for the `admin` module. Even in smaller apps I prefer this separation from the rest of the configuration.

## Angular $ Wrapper Services

### $document and $window
###### [Style [Y180](#style-y180)]

  Use [`$document`](https://docs.angularjs.org/api/ng/service/$document) and [`$window`](https://docs.angularjs.org/api/ng/service/$window) instead of `document` and `window`.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y180)

### $timeout and $interval
###### [Style [Y181](#style-y181)]

  Use [`$timeout`](https://docs.angularjs.org/api/ng/service/$timeout) and [`$interval`](https://docs.angularjs.org/api/ng/service/$interval) instead of `setTimeout` and `setInterval` .

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y181)

## Testing

### Write Tests with Stories
###### [Style [Y190](#style-y190)]

  Write a set of tests for every story. Start with an empty test and fill them in as you write the code for the story.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y190)

### Testing Library
###### [Style [Y191](#style-y191)]

  Use [Jasmine](http://jasmine.github.io/).

### Code Analysis
###### [Style [Y195](#style-y195)]

  Run JSHint on your tests.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y195)

### Organizing Tests
###### [Style [Y197](#style-y197)]

  Place unit test files (specs) side-by-side with your client code. Place specs that cover server integration or test multiple components in a separate `tests` folder.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y197)

## Comments

### jsDoc
###### [Style [Y220](#style-y220)]

  Use [`jsDoc`](http://usejsdoc.org/) syntax to document function names, description, params and returns. Use `@namespace` and `@memberOf` to match your app structure.

## Constants

### Vendor Globals
###### [Style [Y240](#style-y240)]

  Create an AngularJS Constant for vendor libraries' global variables.

  [Read more](https://github.com/johnpapa/angularjs-styleguide#style-y240)
  
