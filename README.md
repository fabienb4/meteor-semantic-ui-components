# fabienb4:semantic-ui-components

Meteor template components to use with Semantic-UI.

> semantic-ui package is NOT included in this package, to allow you to use a customized version if you need to. If you don't use a custom version, you must add the default package `semantic:ui-css` to your meteor app, otherwise, there will be no styling.

## Table of Contents

- [Installation](#installation)
- [Available components](#available-components)
- [Usage](#usage)
- [Extra](#extra)
- [License](#license)
- [Contributing](#contributing)

## Installation

In your Meteor app directory:

```
$ meteor add fabienb4:semantic-ui-components
```

## Available components

- `ConnectionLost` page template
- `Loading` page template
- `progressBar` component
- `searchInput` component
- `selectDropdown` component

## Usage

- Page templates are entire pages (to be used with iron:router package for example).
- Components are to be included in your pages when needed.

### Page templates (with iron:router package):
```js
Router.configure({
  loadingTemplate: "Loading",
  onBeforeAction: function() {
    if (! Meteor.status().connected) {
      this.render("ConnectionLost");
    } else {
      this.next();
    }
  }
});
```

### `progressBar` template:
> In the following example `maxValue` & `currentValue` are reactive variables from the template helpers (they can also come from the current data context).

```js
// Small inverted progress bar
{{> progressBar classNames="small inverted" current=currentValue total=maxValue}}

// Progress bar that changes color when completed
{{> progressBar current=currentValue total=maxValue completeClass="green"}}

// Progress bar with style when low (useful for countdown)
{{> progressBar current=currentValue total=maxValue styleLowBar=true low=20 veryLow=10}}

// Progress bar with ratio display
{{> progressBar current=currentValue total=maxValue showRatio=true}}

// Progress bar with percent display
{{> progressBar current=currentValue total=maxValue showPercent=true}}

// Colored progress bar with label display
{{> progressBar classNames="labeled green" label="Capacity" current=currentValue total=maxValue}}

// Colored progress bar with label & ratio display
{{> progressBar label="Capacity" current=currentValue total=maxValue showRatio=true}}
```

### `searchInput` template:
```js
{{> searchInput}}

// With ID
{{> searchInput id="searchName"}}

// With placeholder
{{> searchInput placeholder="Search..."}}
```

### `selectDropdown` template:

`items` and `label` attributes must be passed to the template.

```js
{{> selectDropdown items=items label="Items"}}

// With a name
{{> selectDropdown items=items label="Items" name="items"}}

// With a custom placeholder
{{> selectDropdown items=items label="Items" placeholder="Select an item"}}

// Required select
{{> selectDropdown items=items label="Items" isRequired=true}}

// Searchable select
{{> selectDropdown items=items label="Items" isSearchable=true}}

// Searchable select with full text search
{{> selectDropdown items=items label="Items" isSearchable=true fullTextSearch=true}}
```

The `items` attribute is used to create the select's options. It must have the following format:
```js
[
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
]
```

## Extra

Some extensions to semantic-ui default build that are useful when using Meteor.

### Reversing animation:
```html
<i class="reversing magnet icon"></i>
```

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
