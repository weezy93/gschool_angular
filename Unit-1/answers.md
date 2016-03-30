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
