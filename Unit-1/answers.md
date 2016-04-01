1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
 - Angular has a smaller footprint, the template is built in, two-way, backbone
is more of a view, not a full framework
data-binding saves a lot of code, has a larger community and online content
2. People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
- directives API is very complex
- harder to test with logic inside the views
- smaller mistakes ( spelling, undefined scope function ) are harder to find
3. Is Angular an MVC framework?
- technically no, the views can contain logic, and therefore it is not strictly separate the way MVC traditionally is
4. Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
- it initializes teh angularJS framework automatically, placed at the HTML tag
so it can regulate the DOM hierarchy. it will only process the elements where
the directive is applied ( child elements of the tag it is placed on )

5. ng-model directive binds the value of an input, select, textarea to a
property, therefore on the scope, therefore
 if there is any change in the value, the DOM is manipulated
 6. dirty-checking is how angular sees if a control has been interacted with (?)
 7. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
- ng-init="name = 'BoJack'"
8. {{ }} are expressions
7. two-way data-binding attaches values to a $scope variable and the dom is
updated whenever those key-value pairs are altered
9. https://www.ng-book.com/p/The-Digest-Loop-and-apply/
digest is like a loop continually listening for changes. when changes occur, the
digest loop fires

10. ng-init allows initial values to be set, and allows for data to be accessed
in child html elements
11. ng-src and ng-href allow for angular expressions to be passed into src and
href tags and behave normally, rather than literally searching for a url or path
with {{}} in it
12. directives are angular markers on the dom that attach a behavior.  you can
create custom directives or use built in directives
13. with ng-class you can use strings, objects, or arrays of strings or objects
to define class names. using an object allows for logic to be done in the view
so that it is more dynamic, checking to see if values are truthy or falsy and
altering the class depending on the case
14. ng-repeat displays items in their index order
15. ng-repeat breaks if there are duplicate items and there is no specification
in how to handle them. nothing will be rendered

16. $scope is a javascript object that connects the controllers and views
17. a module is a collection of directives, controllers, filters, and
configuration info
18. $scope is passed as an argument so that the controller has access to it and
can set and use $scope in the view
19. angular controllers are most like Express locals object

20. $rootScope is the parent scope accessible anywhere in the view
21. $scope inherits from the $rootScope
22. ng-controller, ng-repeat, ng-if, ng-view, ng-switch all create their own
scopes
23. this can create another scope and not properly link the two 
