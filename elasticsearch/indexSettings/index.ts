import { indexSettings as receiptLinesIndexSettings } from './receipt-lines-v2-lab';

type IndexSettings = {
  settings: Record<string, unknown>;
  mappings: { properties: Record<string, unknown> };
};

export enum IndexId {
  RECEIPT_LINES = 'receipt-lines-v2',
}
export const INDEX_SETTINGS: Record<IndexId, IndexSettings> = {
  [IndexId.RECEIPT_LINES]: receiptLinesIndexSettings,
};
