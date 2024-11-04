import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { transform, type FigmaBoxShadow } from './transform';

describe('transformer', () => {
  const cases: [string, TransformedToken, FigmaBoxShadow[]][] = [
    [
      'none',
      {
        name: '',
        path: [],
        value: 'none',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'inherit',
      {
        name: '',
        path: [],
        value: 'inherit',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'initial',
      {
        name: '',
        path: [],
        value: 'initial',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'revert',
      {
        name: '',
        path: [],
        value: 'revert',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'revert-layer',
      {
        name: '',
        path: [],
        value: 'revert-layer',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'unset',
      {
        name: '',
        path: [],
        value: 'unset',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      ],
    ],
    [
      'x y hex-color',
      {
        name: '',
        path: [],
        value: '12px 15rem #ff0000',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 12,
          y: 150,
          blur: 0,
          spread: 0,
          color: '#ff0000',
        },
      ],
    ],
    [
      'inset x y blur spread hex-color',
      {
        name: '',
        path: [],
        value: 'inset 12px 15rem 4px 4px #ff0000',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'innerShadow',
          x: 12,
          y: 150,
          blur: 4,
          spread: 4,
          color: '#ff0000',
        },
      ],
    ],
    [
      'inset x y blur hex-color',
      {
        name: '',
        path: [],
        value: 'inset 12px 15rem 4px #ff0000',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'innerShadow',
          x: 12,
          y: 150,
          blur: 4,
          spread: 0,
          color: '#ff0000',
        },
      ],
    ],
    [
      'inset x y hex-color',
      {
        name: '',
        path: [],
        value: 'inset 12px 15rem #ff0000',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'innerShadow',
          x: 12,
          y: 150,
          blur: 0,
          spread: 0,
          color: '#ff0000',
        },
      ],
    ],
    [
      'complex',
      {
        name: '',
        path: [],
        value:
          '0 0.2rem 0.2rem 0 rgba(12,41,56, 0.15), 0 0.1rem 0.1rem rgba(12,41,56, 0.1)',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      [
        {
          type: 'dropShadow',
          x: 0,
          y: 2,
          blur: 2,
          spread: 0,
          color: 'rgba(12,41,56, 0.15)',
        },
        {
          type: 'dropShadow',
          x: 0,
          y: 1,
          blur: 1,
          spread: 0,
          color: 'rgba(12,41,56, 0.1)',
        },
      ],
    ],
  ];

  it.each(cases)('%s', (_title, token, expected) => {
    expect(transform(token)).toEqual(expected);
  });

  it('error', () => {
    expect(() => {
      transform({
        name: '',
        path: [],
        value: '',
        original: { value: '' },
        filePath: '',
        isSource: false,
      });
    }).toThrow(`
There is an error on the next boxShadow format:

{
  "name": "",
  "path": [],
  "value": "",
  "original": {
    "value": ""
  },
  "filePath": "",
  "isSource": false
}

The accepted values are:
- 'inset? x y color',
- 'inset? x y blur color',
- 'inset? x y blur spread color',

Fix, drop and roll...
`);
  });
});
