---
id: changelog
name: Changelog
description: All notable changes to this project will be documented in this file. The format is based on Keep a Changelog and this project adheres to and this project adheres to Semantic Versioning.
---

## [Unreleased]

### Added

- Enhanced `Carousel` component: Introduced `CarouselIndicator` and `CarouselIndicatorGroup` components. These sub-components offer finer control over the carousel navigation, enabling users to directly access desired carousel slides.
- Expose `use<X>Context` for all components that use context.

## [0.5.3] - 2023-07-10

### Fixed

- Resolved an issue whre the `Toast` component would not render custom content.
- Fixed an issue where standalone imports were not working as expected.
- Resolved an issue where the `SegmentGroup` component would not animate on the first click.

## [0.5.2] - 2023-06-27

### Added

- Support for standalone component imports: Developers can now import individual components, such as `@ark-ui/vue/tabs` instead of the full `@ark-ui/vue` package. This is a significant feature for those working with bundlers that do not support tree-shaking. By allowing imports of individual components, we ensure a reduced bundle size when the full package import is not necessary.

### Fixed

- Added missing `onOpen` events for `Dialog`

## [0.5.1] - 2023-06-20

### Fixed

- Fixed an issue where `TagsInput` was not exported
- Fixed an issue where `CarouselNextSliderTrigger` and `CarouselPrevSlideTrigger` weren't rendered correctly

## [0.5.0] - 2023-06-03

### Added

- Introduced the `onLongPress` property to `Pressable`

### Changed

- Updated all `@zag-js` dependencies to their latest versions

## [0.4.0] - 2023-05-25

### Removed

- Removed `AccordionIcon`

### Fixed

- Fixed a bug where `Toast` and `Environment` weren't exported

## [0.3.0] - 2023-05-23

### Added

- Add `Carousel`
- Add `Environment`
- Add `Toast`
- Add support for `asChild`

### Changed

- Update `Checkbox`. Control `indeterminate` state in `checked` prop

## [0.2.1] - 2023-05-11

### Fixed

- Fix `Dialog` component: apply two-way binding to `open` prop

## [0.2.0] - 2023-04-29

### Added

- Add `ColorPicker`
- Add `TagsInput`

## [0.1.0] - 2023-04-17

### Added

- Add `Accordion`
- Add `Checkbox`
- Add `Combobox`
- Add `DatePicker`
- Add `Dialog`
- Add `Editable`
- Add `HoverCard`
- Add `Menu`
- Add `NumberInput`
- Add `Pagination`
- Add `PinInput`
- Add `Popover`
- Add `Pressable`
- Add `RadioGroup`
- Add `RangeSlider`
- Add `RatingGroup`
- Add `Select`
- Add `Slider`
- Add `Splitter`
- Add `Tabs`
- Add `Tooltip`

[unreleased]: https://github.com/chakra-ui/ark/compare/@ark-ui/vue@0.5.3...HEAD
[0.1.0]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.1.0
[0.2.0]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.2.0
[0.2.1]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.2.1
[0.3.0]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.3.0
[0.4.0]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.4.0
[0.5.0]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.5.0
[0.5.1]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.5.1
[0.5.2]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.5.2
[0.5.3]: https://github.com/chakra-ui/ark/releases/tag/@ark-ui/vue@0.5.3
