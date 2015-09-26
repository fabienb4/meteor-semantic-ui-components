fabienb4:semantic-ui-components
=========================

Meteor template components to use with Semantic-UI.

## ChangeLog

### 0.4.0 [BREAKING]

- Updated `selectDropdown` to support new features.
  - `allowAdditions`, `allowCategorySelection`, `multiple`, `maxSelections`, `useLabels` are now supported.
  - Categories can now be used (see README).
  - `field` div is no longer wrapping the dropdown (you can add it around the template call, if need be).
  - `label` is no longer included (you must add it in your code, if need be).

### 0.3.0 [BREAKING]

- Updated for compatibility with Meteor 1.2 (_no longer usable with Meteor < 1.2_).
  - Make use of ES6.
- Code cleanup.
- Added ability to customize text on `connectionLost` & `loading` templates.
- Added `menu` component.
