# CortoJS

## About

**CortoJS** is a minimalist node selector and node looper. 

Corto's alias is `$$`, but you can revert it with `corto.noConflict();`

## Example

Corto returns an array of nodes:

```javascript
var list = $$('.element');
```

Corto attaches a looper to the returned array: the function `loop` and the pointer to the looped element `node`:

```javascript
while( list.loop() ) list.node.classList.add('is-active');
```

## Important

Do not `break` or `return` while looping.
