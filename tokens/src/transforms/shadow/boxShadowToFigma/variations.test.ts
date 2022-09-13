import {
  InsetXYColor,
  InsetXYBlurColor,
  InsetXYBlurSpreadColor,
} from './variations';

describe('variations', () => {
  describe('inset? x y color', () => {
    const cases: [string, string | undefined][] = [
      [
        'inset 12px 13rem rgb(10,10,10)',
        [
          'inset 12px 13rem rgb(10,10,10)',
          'inset',
          '12px',
          '13rem',
          'rgb(10,10,10)',
        ].join(';'),
      ],
      [
        'inset 12px 13rem rgba(  10,  10,  10,  10)',
        [
          'inset 12px 13rem rgba(  10,  10,  10,  10)',
          'inset',
          '12px',
          '13rem',
          'rgba(  10,  10,  10,  10)',
        ].join(';'),
      ],
      [
        'inset 12px 13rem rgb(0,0,0)a',
        [
          'inset 12px 13rem rgb(0,0,0)',
          'inset',
          '12px',
          '13rem',
          'rgb(0,0,0)',
        ].join(';'),
      ],
      [
        'inset 12  13  #FF0000',
        ['inset 12  13  #FF0000', 'inset', '12', '13', '#FF0000'].join(';'),
      ],
      ['inset 12px 13rem rgb( 0, 0px, 0 )', undefined],
      ['inset 12px 13rem rgb(0,0,0,0,0)', undefined],
    ];

    it.each(cases)('%s', (text, expected) => {
      expect(InsetXYColor.exec(text)?.join(';')).toBe(expected);
    });
  });

  describe('inset? x y blur color', () => {
    const cases: [string, string | undefined][] = [
      [
        'inset 12px 13rem 12px #000000',
        [
          'inset 12px 13rem 12px #000000',
          'inset',
          '12px',
          '13rem',
          '12px',
          '#000000',
        ].join(';'),
      ],
      [
        'inset 12px   13rem   5rem rgb(0,0,0)',
        [
          'inset 12px   13rem   5rem rgb(0,0,0)',
          'inset',
          '12px',
          '13rem',
          '5rem',
          'rgb(0,0,0)',
        ].join(';'),
      ],
      [
        '12px 13  5  rgba( 0  ,0,0,  .15)',
        [
          '12px 13  5  rgba( 0  ,0,0,  .15)',
          undefined,
          '12px',
          '13',
          '5',
          'rgba( 0  ,0,0,  .15)',
        ].join(';'),
      ],
      [
        '12px 13px 5px rgba(0,0,0,0)a',
        [
          '12px 13px 5px rgba(0,0,0,0)',
          undefined,
          '12px',
          '13px',
          '5px',
          'rgba(0,0,0,0)',
        ].join(';'),
      ],
      ['12px 13  5  rgba( 0  ,p0,0,  .15)', undefined],
      ['12px 13  5  rgba( 0  ,0p,0,  .15)', undefined],
      ['12px 13  5  rgba( 0  ,0,p0,  .15)', undefined],
      ['12px 13  5  rgba( 0  ,0,0p,  .15)', undefined],
    ];

    it.each(cases)('%s', (text, expected) => {
      expect(InsetXYBlurColor.exec(text)?.join(';')).toBe(expected);
    });
  });

  describe('inset? x y blur spread color', () => {
    const cases: [string, string | undefined][] = [
      [
        'inset 12 13 5rem 2rem rgb(0,0,0)',
        [
          'inset 12 13 5rem 2rem rgb(0,0,0)',
          'inset',
          '12',
          '13',
          '5rem',
          '2rem',
          'rgb(0,0,0)',
        ].join(';'),
      ],
      [
        '12px 13rem 15rem 12rem rgba( 0  ,0,0,  .15)',
        [
          '12px 13rem 15rem 12rem rgba( 0  ,0,0,  .15)',
          undefined,
          '12px',
          '13rem',
          '15rem',
          '12rem',
          'rgba( 0  ,0,0,  .15)',
        ].join(';'),
      ],
      [
        '12px 13rem 15rem 12rem rgba(0,0,0,0)a',
        [
          '12px 13rem 15rem 12rem rgba(0,0,0,0)',
          undefined,
          '12px',
          '13rem',
          '15rem',
          '12rem',
          'rgba(0,0,0,0)',
        ].join(';'),
      ],
      ['12px 13rem 15rem 12rem rgba(0,p0,0,0)', undefined],
      ['12px 13rem 15rem 12rem rgba(0,0p,0,0)', undefined],
      ['12px 13rem 15rem 12rem rgba(0,0,p0,0)', undefined],
      ['12px 13rem 15rem 12rem rgba(0,0,0p,0)', undefined],
      [
        'inset 12px   13rem   12   5px   #000000',
        [
          'inset 12px   13rem   12   5px   #000000',
          'inset',
          '12px',
          '13rem',
          '12',
          '5px',
          '#000000',
        ].join(';'),
      ],
    ];

    it.each(cases)('%s', (text, expected) => {
      expect(InsetXYBlurSpreadColor.exec(text)?.join(';')).toBe(expected);
    });
  });
});
