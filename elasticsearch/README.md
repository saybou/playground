# Elasticsearch Playground

## Setup

Update `indexSettings/index.ts`:

- add your index identifier (~name) to `IndexId` enum
- add your index settings (and mapping 😎) to `INDEX_SETTINGS` config

Update `elasticsearch.ts`:

Set constants according to your index

```typescript
// set an index prefix (avoiding using a real index on production :troll:)
const INDEX_PREFIX = 'myprefix-';
// use your index identifier
const INDEX_ID = IndexId.RECEIPT_LINES;
```

## Run

```bash
yarn run ts-node elasticsearch.ts
# avoid type checking
yarn run ts-node -T elasticsearch.ts
```

## Todo

Make it more interactive!
