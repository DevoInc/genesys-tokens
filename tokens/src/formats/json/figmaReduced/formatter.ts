import type { Formatter } from 'style-dictionary';

import { FIGMA_TOKENS_CAT } from '../../../constants';
import { evalNode } from '../../eval';

export const formatter: Formatter = ({ dictionary }) => {
  const tree = evalNode<{ value: string; type: string }>(
    dictionary.properties,
    (node) => ({
      value: node.value,
      type: node?.attributes?.figmaType,
    })
  );

  // avoid redundant info in Figma
  if ('figma' in tree && FIGMA_TOKENS_CAT.TYPO in tree.figma) {
    tree[FIGMA_TOKENS_CAT.TYPO] = tree.figma[FIGMA_TOKENS_CAT.TYPO];
    delete tree.figma;
  }

  return JSON.stringify(tree, null, 2);
};
