# CSS Container Queries

The main idea of CSS Container Queries is to register an element as a “container” and apply styles to other elements when the container element meets certain conditions.
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

## About `container-type`

Possible values are `normal`, `size`, `inline-size`

### `normal`

This indicates that the element is a container that can be queried by its styles rather than size. Querying by style has limited support.

### `size`

The size refers to the container’s inline (width) or block direction (height), whichever is larger.

### `inline-size`

The inline-size refers to the container’s width in the default horizontal writing mode.

## Container units

You may already be familiar with viewport units, which can be used for sizing elements relative to the viewport. Container units enable us to instead size elements relative to the container.
In the example below the unit `cqi` is used to specify a percentage of the container's inline size.

```css
article {
  padding: 4cqi;
}
```

(We don't need to write these styles inside a container query. They will respond to the container, as long as one is defined.)

## Resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- https://css-tricks.com/css-container-queries/
- https://caniuse.com/css-container-queries-style
- https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/
