## Track

### Свойства

| Название       | Тип                            | Примечания                                  |
| -------------- | ------------------------------ | ------------------------------------------- |
| id             | `string`                       |                                             |
| title          | `string`                       |                                             |
| genres         | [`Genre[]`](./Common.md#genre) |                                             |
| position       | `number`                       |                                             |
| duration       | `number`                       |                                             |
| availability   | `number`                       |                                             |
| artistTemplate | `string`                       |                                             |
| explicit       | `boolean`                      |                                             |
| lyrics         | `boolean \| null`              |                                             |
| artists        | [`Artist[]`](./Artist.md)      |                                             |
| release        | [`Album`](./Album.md)          | нет следующих свойств - `artists`, `tracks` |
