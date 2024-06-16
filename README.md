# Hype Text Fit

![HypeTextFit|](https://playground.maxziebell.de/Hype/TextFit/HypeTextFit.jpg)

<sup>The cover artwork is not hosted in this repository and &copy;opyrighted by Max Ziebell</sup>

Hype Text Fit is a utility for the Hype community that dynamically adjusts the font size of text elements to ensure they fit within their containers. It can seamlessly accommodate different line heights and even integrate multiple font sizes within the same fit.

The tool offers flexibility, designed not only for the core purpose of fitting text but also for potential applications in localization and other template systems utilizing Hype Reactive Content.

## Features

- **Adjusts Font Size**: Automatically fits text within a container.
- **Seamless Integration**: Compatible with different line heights.
- **Multiple Font Sizes**: Works with multiple font sizes within the same fit.
- **Versatile Modes**: Supports width, height, or font size adjustments.
- **Responsive**: Reacts to font loading events, ensuring compatibility with custom fonts.

## How to Use

1. **Apply `data-textfit` Attribute**:
   - Add the `data-textfit` attribute to any element you'd like to apply dynamic text fitting.
   - Supported values:
     - `lower`: Smallest size that fits within the container.
     - `upper`: Largest size that fits within the container.
     - `mid`: Midpoint between the smallest and largest sizes that fit within the container.
     - `width`: Adjusts the width of the element to fit its content.
     - `height`: Adjusts the height of the element to fit its content.
2. **Optional Data Attributes**:
   - `data-textfit-min`: Minimum font size or dimension value (floating-point number or integer).
   - `data-textfit-max`: Maximum font size or dimension value (floating-point number or integer).
   - `data-textfit-threshold`: Font size adjustment threshold (floating-point number or integer).
   - `data-textfit-unit`: Font size adjustment unit (default is 'em').

## Data Attributes

| Attribute             | Description                                         | Example Values |
|-----------------------|-----------------------------------------------------|----------------|
| `data-textfit`        | Mode of text fitting                                | `lower`, `upper`, `mid`, `width`, `height` |
| `data-textfit-min`    | Minimum font size or dimension value                | `1`, `0.5`     |
| `data-textfit-max`    | Maximum font size or dimension value                | `3`, `5`       |
| `data-textfit-threshold` | Font size adjustment threshold                      | `0.1`, `0.05`  |
| `data-textfit-unit`   | Unit for font size adjustment (default is 'em')     | `em`, `px`     |

## Example Usage

```html
<div data-textfit="lower" data-textfit-min="1" data-textfit-max="3" data-textfit-threshold="0.1" data-textfit-unit="em">
  This is a text element that will adjust its font size.
</div>
```

## Feedback & Contributions

Feedback is invaluable in refining this utility further. The developer community's insights guide the continuous improvements. Do take the tool for a spin and share your feedback, insights, and suggestions. Contributions to the project are welcomed.

## License

This project is released under the MIT License.

## Documentation

There is a [JSDoc](https://en.wikipedia.org/wiki/JSDoc) based documentation of the functions at [doxdox.org](https://doxdox.org/worldoptimizer/HypeTextFit).

## Content Delivery Network (CDN)

The latest version can be linked into your project using the following in the head section of your project:

```html
<script src="https://cdn.jsdelivr.net/gh/worldoptimizer/HypeTextFit/HypeTextFit.min.js"></script>
```

Optionally, you can also link a SRI version or specific releases. Read more about that on the [JsDelivr (CDN) page](https://www.jsdelivr.com/package/gh/worldoptimizer/HypeTextFit) for this extension.

Learn how to use the latest extension version and how to combine extensions into one file at the [HypeCookBook wiki](https://github.com/worldoptimizer/HypeCookBook/wiki/Including-external-files-and-Hype-extensions).
