# minitrue [![Build Status](https://travis-ci.org/Dashed/minitrue.svg?branch=master)](https://travis-ci.org/Dashed/minitrue)

> War is Peace
> 
> Freedom is Slavery
> 
> Ignorance is Strength
> 
> — **Ministry of Truth**

`minitrue` (Ministry of Truth) create `Prolefeed` objects that reference a single object reference containing an Immutable Map.

All created `Prolefeed` instances point to the single source of truth.

Any two `Prolefeed` objects with the same keypath will point to the same value.

## Usage

```
$ npm install --save minitrue
```

### API

### `minitrue`

Create and return a `Prolefeed` object with `data` as its unboxed root data.
If `data` is not an `Immutable` collection, it'll be converted into one via
`Immutable.fromJS(data)`.

```js

const truth = minitrue({
    'two plus two': {
        answer: 'five'
    }
});
```

### `Prolefeed`

See [Prolefeed API](https://github.com/Dashed/prolefeed).

## FAQ

### WTF is minitrue?

 `minitrue`, otherwise known as the Ministry of Truth, is an organization in George Orwell's novel, *Nineteen Eighty-Four*, that manages propaganda within a region called Oceania.

Prolefeed is any deliberately superficial literature, movies and music that were produced to keep the "proles" (i.e., proletariat) content and to prevent them from becoming too knowledgeable.

The proles are analogous to React Components.

Sources: 
- https://en.wikipedia.org/wiki/Ministry_of_Truth 
- https://en.wikipedia.org/wiki/Prolefeed

## License

MIT
