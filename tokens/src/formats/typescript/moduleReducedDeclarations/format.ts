import type { FormatFn } from 'style-dictionary/types';
import {
  InputData,
  quicktypeMultiFileSync,
  jsonInputForTargetLanguage,
} from 'quicktype-core';

import { evalNode } from '../../eval';

const quicktypeJSON = (
  targetLanguage: string,
  typeName: string,
  jsonString: string,
) => {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  jsonInput.addSourceSync({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return quicktypeMultiFileSync({
    inputData,
    lang: targetLanguage,
    rendererOptions: { 'just-types': 'true' },
  });
};

export const format: FormatFn = ({ dictionary }) => {
  const resMap = quicktypeJSON(
    'typescript',
    'Brand',
    JSON.stringify(
      evalNode<string>(dictionary.tokens, (token) => token.value),
    ),
  );
  const declarationsLines = resMap.get('stdout')?.lines || [];
  const declarations = JSON.parse(JSON.stringify(declarationsLines.join('\n')));
  return declarations;
};
