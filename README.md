## Singley Linked List
Module for linked list integrated with javascript.

### methods

```js
append(value)
```
- appends `value` to the list, giving it the newest index.

```js
prepend(value)
```
- prepends `value` to the list, giving it index 0.

```js
size()
```
- returns the size of the list.

```js
head()
```
- returns the head(first) node of the list.

```js
tail()
```
- returns the tail(last) node of the list.

```js
at(index)
```
- returns the index of the first node with a value of `value`.

```js
pop()
```
- removes the head node from the list and returns its value, shifting all other nodes.

```js
contains(value)
```
- returns `true` if `value` if found in the list. otherwise, returns `false`.

```js
findIndex(value)
```
- return the index of `value` in the list. if it cannot find `value` it instead returns `-1`.

```js
toString()
```
- returns all values in the list as a string formatted as: `(value) -> (value2) -> (value3) -> null`

```js
insertAt(index, ...values)
```
- inserts `values` in order at `index`, shifting all other nodes from `index` onward.

```js
removeAt(index)
```
- removes `index` from list and shifts all values after.
