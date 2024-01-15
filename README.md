# «СберЗвук» API

Данная библиотека предназначена для упрощения взаимодействия с API музыкальной платформы «СберЗвук» (или же просто «Звук»).

> :warning: **Использование библиотеки невозможно без токена**. Есть два способа его получить:
>
> 1. Статический метод `getAnonymousToken`. Не требует какой-либо авторизации, однако имеет некоторые ограничения (вроде отсутствия доступа к 320kbps версиям треков).
> 2. Самостоятельно [зарегистроваться или войти](https://zvuk.com) после чего перейти [сюда](https://zvuk.com/api/tiny/profile), скопировать значение поля `token` и указать при создании класса.

Как только токен будет получен, можно начинать использовать библиотеку.

## Установка

### `npm`

```bash
npm i sberzvuk-api
```

### `yarn`

```bash
yarn add sberzvuk-api
```

## Пример использования

```ts
import { ZvukAPI } from 'sberzvuk-api';

const api = new ZvukAPI(ZvukAPI.getAnonymousToken());

async function main() {
    const data = await api.quickSearch('pyro');

    console.log(data);
}

void main();
```

## Документация

Располагается [здесь](./docs/README.md)
