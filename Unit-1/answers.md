1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
 - Angular has a smaller footprint, the template is built in, two-way
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
