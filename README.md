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
- `menu` component
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

### `menu` component:
```js
{{> menu items=items classes="blue inverted"}}
```

The `items` attribute is used to create the menu's items. It must have one of the following formats:
```js
// Simple
items = [
  { href: "link-one", value: "Link One" },
  { value: "Item Two" }
];

// With icons/flags
items = [
  { href: "link-one", icon: "file text icon" },
  { value: "Item Two", icon: "my flag" },
];

// Sub-menu (dropdown)
items = [
  { href: "link-one", value: "Link One" },
  { value: "Item Two", icon: "file text icon" },
  {
    value: [
      { href: "sub-link-one", value: "Sub Link One", icon: "file text icon" },
      { value: "Sub Item Two" },
    ],
    icon: "file text icon"
  }
];
```

### `progressBar` component:
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

### `searchInput` component:
```js
{{> searchInput}}

// With ID
{{> searchInput id="searchName"}}

// With placeholder
{{> searchInput placeholder="Search..."}}
```

### `selectDropdown` component:

`items`, `label` and `name` attributes must be passed to the template.

```js
// Simple
{{> selectDropdown items=items label="Items" name="items"}}

// With a custom placeholder
{{> selectDropdown items=items label="Items" name="items" placeholder="Select an item"}}

// Required select
{{> selectDropdown items=items label="Items" name="items" required=true}}

// Searchable select
{{> selectDropdown items=items label="Items" name="items" search=true}}

// Searchable select with full text search
{{> selectDropdown items=items label="Items" name="items" fullTextSearch=true}}
```

The `items` attribute is used to create the select's options. It must have one of the following formats:
```js
// Simple
items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];

// With icons/flags
items = [
  { value: "1", label: "Item 1", icon: "file text icon" },
  { value: "2", label: "Item 2", icon: "bz flag" }
];

// Groups with headers
items = [
  {
    itemGroup: "Group one",
    items: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ]
  },
  {
    itemGroup: "Group two",
    items: [
      { value: "3", label: "Item 3" },
      { value: "4", label: "Item 4" }
    ]
  }
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

Bitcoin: `34o6GtZPvVXparT46Zw2kfdxex2SWRpkGS`

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
