app.filter('kebab', function () {
  return function (input) {
    if (!isNaN(input)) {
      return input;
    } else {
      return input.replace(/ /g , '-');
    }
  };
});

app.filter('snake', function () {
  return function (input) {
    if (!isNaN(input)) {
      return input;
    } else {
      return input.replace(/ /g, '_');
    }
  };
});

app.filter('camel', function () {
  return function (input) {
    if (!isNaN(input)) {
      return input;
    } else {
      return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/\s+/g, '');
    }
  };
});

app.filter('pigLatin', function () {
  return function (input) {
    if (!isNaN(input)) {
      return input;
    } else {
      return input.replace(/(?:^\w|[A-Z])/g, function (letter, index) {
        if (index == 0) {
          var last = letter.slice(index, 1);
          input + last + 'ay';
        }
      }).replace(/\s+/g, '');
    }
  };
});
