import { Client } from '@elastic/elasticsearch';
import { INDEX_SETTINGS, IndexId } from './indexSettings';

const esClient = new Client({ node: 'http://localhost:9200' });
const INDEX_PREFIX = 'braqueurs-test-cc';
const INDEX_ID = IndexId.RECEIPT_LINES;

const main = async () => {
  const indexName = `${INDEX_PREFIX}-${INDEX_ID}-lab`;
  const { statusCode } = await esClient.indices.exists({
    index: indexName,
  });

  // IF YOU WANT TO REMOVE INDEX FIRST
  //await esClient.indices.delete({
  //  index: indexName,
  //});

  // IF YOU WANT TO UPDATE THE MAPPING ON AN EXISTING INDEX
  //await esClient.indices.putMapping({
  //  index: indexName,
  //  body: { ...INDEX_SETTINGS[INDEX_ID].mappings },
  //});

  // IF INDEX DOES NOT EXIST
  if (statusCode === 404) {
    console.log(`Creating index ${indexName}.`);

    // CREATE INDEX
    await esClient.indices.create({
      index: indexName,
      body: { ...INDEX_SETTINGS[INDEX_ID] },
    });

    console.log(`Index ${indexName} created.`);

    return;
  }

  console.log(`Index ${indexName} already exists.`);
};

(async () => {
  console.log('--- START elasticsearch.ts ---');
  await main();
  console.log('--- END elasticsearch.ts ---');
})();
