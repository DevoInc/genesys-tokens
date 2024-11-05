import type { FormatFn } from 'style-dictionary/types';

import { FIGMA_TOKENS_CAT } from '../../../constants';
import { evalNode, EvaluatedNode } from '../../eval';

export const format: FormatFn = ({ dictionary }) => {
  const tree = evalNode<{ value: string; type: string }>(
    dictionary.tokens,
    (node) => ({
      value: node.value,
      type: node.attributes?.figmaType as string,
    }),
  );

  // avoid redundant info in Figma
  if ('figma' in tree && FIGMA_TOKENS_CAT.TYPO in tree.figma) {
    tree[FIGMA_TOKENS_CAT.TYPO] = (
      tree.figma as {
        [key: string]: EvaluatedNode<{ value: string; type: string }>;
      }
    )[FIGMA_TOKENS_CAT.TYPO];
    delete tree.figma;
  }

  return JSON.stringify(tree, null, 2);
};
