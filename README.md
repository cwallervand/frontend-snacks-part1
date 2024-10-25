# CSS and HTML treats

## CSS Container Queries

The idea of CSS Container Queries is to register an element as a “container” and apply styles to it's children when the container element meets certain conditions.
Typical example:

```css
.parent {
  container-name: hero-banner;
  container-type: inline-size;

  /* or container: hero-banner / inline-size; */
}

.child {
  display: flex;
  flex-direction: column;
}

/* When the container is greater than 60 characters... */
@container hero-banner (width > 60ch) {
  /* Change the flex direction of the .child element. */
  .child {
    flex-direction: row;
  }
}
```

A container cannot change its own styles, but you can change the styles of the container’s children / content.

Container Style Queries are aslo a thing where you can query a container’s style (rather than size) and apply styling to its content based on that query.
[Support is rather limited](https://caniuse.com/css-container-queries-style).

```css
/* Old syntax for styles between 700px and 900px */
@container (min-width: 700px) and (max-width: 900px) {
}

/* New syntax */
@container (700px <= width <= 900px) {
}
```

### About `container-type`

Possible values are `normal`, `size`, `inline-size`

#### `normal`

This indicates that the element is a container that can be queried by its styles rather than size. Querying by style has limited support.

#### `size`

The size refers to the container’s inline (width) or block direction (height), whichever is larger.

#### `inline-size`

The inline-size refers to the container’s width in the default horizontal writing mode.

### Container units

You may already be familiar with viewport units, which can be used for sizing elements relative to the viewport. Container units enable us to instead size elements relative to the container.
In the example below the unit `cqi` is used to specify a percentage of the container's inline size.

```css
article {
  padding: 4cqi;
}
```

cqw: 1% of a query container's width
cqh: 1% of a query container's height
cqi: 1% of a query container's inline size
cqb: 1% of a query container's block size
cqmin: The smaller value of either cqi or cqb
cqmax: The larger value of either cqi or cqb

(We don't need to write these styles inside a container query. They will respond to the container, as long as one is defined.)

## HTML dialog

The `dialog` elements gives you all of the modal nicetiesor free!

When a `form` within a `dialog` is submitted
via the dialog method, the dialog box closes, the states of the form
controls are saved but not submitted, and the `returnValue` property gets set to the value of the
button that was activated.

## :has selector

The CSS `:has` selector can be used to style an element based on other elements inside it, or it's siblings.

## Image lazy loading

With the `loading` attribute, images and iframes can now be lazely loaded. By setting `loading="lazy"` on an image or iframe,
the browser will only load the image when it enters the viewport.
To avoid shifts in layout, the `width` and `height` attributes should be set.

If you need to change a background image, you can use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Resources

### Container queries

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- https://css-tricks.com/css-container-queries/
- https://caniuse.com/css-container-queries-style
- https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/

### HTML dialog element

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

### :has operator

- https://www.joshwcomeau.com/css/has/
- https://www.developerway.com/posts/replacing-react-with-css
- https://tobiasahlin.com/blog/previous-sibling-css-has/

### Image lazy loading

- https://www.debugbear.com/blog/defer-offscreen-images
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Text fragments

- https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments
- https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html
