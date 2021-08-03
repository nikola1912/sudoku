/**
 * @type {import("@types/stylelint").Configuration}
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null
  }
}
