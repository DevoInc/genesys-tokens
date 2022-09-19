import type { Dictionary } from 'style-dictionary';

import { formatter } from './formatter';

describe('formats', () => {
  describe('html', () => {
    describe('formatter', () => {
      const cases: [string, Dictionary, string][] = [
        [
          'two properties',
          {
            allProperties: [],
            tokens: {},
            allTokens: [],
            properties: {
              alias: {
                breakpoints: {
                  mediaQuery: {
                    xs: {
                      value: '575px',
                      filePath: '',
                      isSource: true,
                      original: { value: '575px' },
                      name: 'ALIAS_BREAKPOINTS_MEDIA_QUERY_XS',
                      attributes: {
                        figmatType: 'other',
                        tier: 'alias',
                        element: 'breakpoints',
                        category: 'mediaQuery',
                        property: 'xs',
                      },
                      path: ['alias', 'breakpoints', 'mediaQuery', 'xs'],
                    },
                    sm: {
                      value: '576px',
                      filePath: '',
                      isSource: true,
                      original: { value: '576px' },
                      name: 'ALIAS_BREAKPOINTS_MEDIA_QUERY_SM',
                      attributes: {
                        figmatType: 'other',
                        tier: 'alias',
                        element: 'breakpoints',
                        category: 'mediaQuery',
                        property: 'sm',
                      },
                      path: ['alias', 'breakpoints', 'mediaQuery', 'sm'],
                    },
                  },
                },
              },
            },
            usesReference: () => false,
            getReferences: () => [],
          },
          `
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Design Tokens</title>
  <link href='https://fonts.googleapis.com/css?family=Poppins:400,500,600' rel='stylesheet'>
  <style>
    html {
      font-size: 10px;
    }
    body {
      font-family: 'Poppins';
      font-size: 22px;
      margin: 50px 300px;
    }

    h2 {
      color: rgb(91, 104, 112);
    }

    p {
      box-sizing: inherit;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      font-family: Poppins, sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      line-height: 24px;
      color: rgb(91, 104, 112);
      margin: 1.6rem 0px;
    }

    table {
      box-sizing: inherit;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      border-spacing: 0;
      table-layout: fixed;
      color: rgb(91, 104, 112);
      width: 100%;
      margin: 16px 0px;
      font-size: 13px;
      line-height: 20px;
      padding: 0px;
      border-collapse: collapse;
    }

    table tr th {
      padding: .5rem;
      white-space: nowrap;
      text-align: left;
      color: black;
      font-weight: 600;
      background-color: rgb(243, 243, 243);

    }

    table tr td {
      padding: .5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .count {
      text-align: right;
      margin: 5px 0 20px 0;
    }

    .search {
      width: 100%;
      height: 2rem;
      padding: 0px 0.8rem;
      border-width: 0.1rem;
      border-style: solid;
      border-radius: 0.2rem;
      box-sizing: border-box;
      border-color: rgb(195, 211, 222);
    }

    .colorPreview {
      height: 20px;
      width: 60px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .borderRadiusPreview {
      height: 20px;
      width: 60px;
      background-color: rgb(249, 234, 252);
    }

    .borderSizePreview {
      height: 20px;
      width: 60px;
      border-style: solid;
      border-color: black;
    }

    .textColorPreview {
      font-weight: 600;
    }

    .sizePreview {
      background-color: rgb(225, 250, 242);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }

    .lineSizePreview {
      background-color: rgb(225, 250, 242);
    }
  </style>


</head>

<body>

  <h1>Design Tokens</h1>
  <h2>alias</h2>

  <div class="container">
    <input class="search" type="text" name="search query" value="" placeholder="Search by token name" />

    <p class="count">
      <!-- To be filled dinamically -->
    </p>

    <table>
      <!-- To be filled dinamically -->
    </table>
  </div>

  <!-- Embbed dataset content -->
  <script>
    const tokensArr = {
  "alias-breakpoints-mediaQuery-xs": "575px",
  "alias-breakpoints-mediaQuery-sm": "576px"
};
    const keys = Object.keys(tokensArr).sort();
  </script>


  <!-- Filtering logic -->
  <script>
    const getFilteredOptions = (val = '') => {
      return val === '' ? keys :
        keys.filter((x) => x.includes(val))
    };

    const input = document.querySelector(".search");
    input.addEventListener("change", (event) => setListContent(event.target.value));

  </script>

  <!-- List Entry -->
  <script>
    const header = '<tr><th>Token</th><th>Raw Value</th><th>Preview</th></tr>';
    const name = (el) => '<td>' + el + '</td>';
    const rawValue = (el) => '<td>' + tokensArr[el] + '</td>';
    const colorPreview = (color) => '<div class="colorPreview" style="background-color:' + color + ';"></div>';
    const borderRadiusPreview = (radius) => '<div class="borderRadiusPreview" style="border-radius:' + radius + ';"></div>';
    const borderSizePreview = (size) => '<div class="borderSizePreview" style="border:' + size + ';"></div>';
    const textColorPreview = (color) => '<div class="textColorPreview" style="color:' + color + ';">TOKEN</div>';
    const fontSizePreview = (size) => '<div style="font-size:' + size + ';">TOKEN</div>';
    const lineSizePreview = (size) => '<div class="lineSizePreview" style="height:' + size + ';"></div>'
    const sizePreview = (size) => {
      const sizeNumber = parseFloat(size?.substring(0, size.length - 3));
      const result = sizeNumber < 8 ? size : '8rem';
      return '<div class="sizePreview" style="height:' + result + '; width:' + result + ';">' + (sizeNumber < 8 ? "" : "bigger") + '</div>'
    };

    const preview = (el) => {
      const container = (content = '') => '<td>' + content + '</td>'
      const sections = el.split('-');
      if (sections.includes('color')) {
        if (sections.includes('text')) {
          return container(textColorPreview(tokensArr[el]));
        } else {
          return container(colorPreview(tokensArr[el]));
        }
      } else if (sections.includes('size')) {
        return container(sizePreview(tokensArr[el]));
      } else if (sections.includes('fontSize')) {
        return container(fontSizePreview(tokensArr[el]));
      } else if (sections.includes('lineHeight')) {
        return container(lineSizePreview(tokensArr[el]));
      } else if (sections.includes('shape')) {
        if (sections.includes('borderSize')) {
          return container(borderSizePreview(tokensArr[el]));
        } else if (sections.includes('borderRadius')) {
          return container(borderRadiusPreview(tokensArr[el]));
        } else {
          return container('n/a');
        }
      } else {
        return container('n/a');
      }

    };
    const tokenEl = (el) => '<tr>' + name(el) + rawValue(el) + preview(el) + '</tr>';

  </script>

  <!-- Rendering logic -->
  <script>
    const list = document.querySelector("table");
    const count = document.querySelector(".count");

    const setListContent = (query) => {
      const filtered = getFilteredOptions(query).map(tokenEl);
      list.innerHTML = [header, ...filtered].join("");
      count.innerHTML = 'Showing ' + filtered.length + '/' + keys.length;
    };

    setListContent();
  </script>

</body>

</html>`,
        ],
      ];

      it.each(cases)('%s', (_title, dictionary, expected) => {
        expect(
          formatter({
            dictionary,
            file: { destination: '' },
            options: {},
            platform: {},
          })
        ).toEqual(expected);
      });
    });
  });
});
