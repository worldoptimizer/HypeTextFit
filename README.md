# Hype Text Fit

![HypeTextFit|](https://playground.maxziebell.de/Hype/TextFit/HypeTextFit.jpg)

<sup>The cover artwork is not hosted in this repository and &copy;opyrighted by Max Ziebell</sup>


Hype Text Fit is a utility for the Hype community that dynamically adjusts the font size of text elements to make sure they fit within their containers. It can seamlessly accommodate different line heights and even integrate multiple font sizes within the same fit.

The tool offers flexibility, being designed not only for the core purpose of fitting text but also potential applications in localization and other template systems utilizing Hype Reactive Content.

## Features:

- Adjusts font size to fit text within a container.
- Integrates seamlessly with different line heights.
- Can work with multiple font sizes within the same fit.
- Offers different modes: width, height, or font size adjustments.
- Responsiveness to font loading events, ensuring compatibility with custom fonts.

## How to Use:

1. To any element you'd like to apply the dynamic text fitting, add the `data-textfit` attribute. Supported values are `lower`, `upper`, `mid`, `width`, and `height`.
2. (Optional) For more granular control, you can use the following data attributes:
   - `data-textfit-min`: Minimum font size or dimension value.
   - `data-textfit-max`: Maximum font size or dimension value.
   - `data-textfit-threshold`: Font size adjustment threshold.
   - `data-textfit-unit`: Font size adjustment unit (default is 'em').

## Feedback & Contributions:

Feedback is invaluable in refining this utility further. The developer community's insights guide the continuous improvements. Do take the tool for a spin, and share your feedback, insights, and suggestions. Contributions to the project are welcomed.

## License:

This project is released under the MIT License.

## Documentation

There is a [JSDoc](https://en.wikipedia.org/wiki/JSDoc) based documentation of the functions at https://doxdox.org/worldoptimizer/HypeTextFit

Content Delivery Network (CDN)
--

Latest version can be linked into your project using the following in the head section of your project:

```html
<script src="https://cdn.jsdelivr.net/gh/worldoptimizer/HypeTextFit/HypeTextFit.min.js"></script>
```

Optionally you can also link a SRI version or specific releases. 
Read more about that on the JsDelivr (CDN) page for this extension at https://www.jsdelivr.com/package/gh/worldoptimizer/HypeTextFit

Learn how to use the latest extension version and how to combine extensions into one file at
https://github.com/worldoptimizer/HypeCookBook/wiki/Including-external-files-and-Hype-extensions

---
