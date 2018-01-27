module.exports = {
  fontFamilies: {
    serif: '"Source Serif Pro", serif',
    'sans-serif': 'Montserrat, sans-serif',
  },
  fontSizes: {
    xxxl: '7em',
    xxl: '2.6em',
    xl: '1.9em',
    lg: '1.4em',
    md: '1em',
    sm: '0.85em',
    xs: '0.7em',
  },
  lineHeights: {
    sm: '1.2',
    md: '1.7',
  },
  baseColors: {
    primary: '#31c4a9',
    // secondary: '#dd6618',
    gray: '#7a7a7a',
  },
  responsive: [],
  disabledRules: [
    'align-items',
    'align-content',
    'align-self',
    'background-sizes',
    'cursors',
    'flex-direction',
    'justify-content',
    'margin-percentages',
    'overflow',
    'opacity',
    'opacity-hover',
    'visibility',
    'whitespace',
    'widths',
    'z-index',
  ],
  customRules: {
    html: {
      name: 'HTML',
      rules: opts => [
        { selector: 'p', inherits: ['.my-sm', '.lh-md'] },
        {
          selector: 'a',
          properties: { transition: 'all 0.4s' },
          inherits: [
            '.black',
            '.td-none',
            '.bb',
            '.bc-gray-lighter',
            '.pb-xxs',
          ],
        },
        {
          selector: 'a:hover',
          inherits: ['.primary', '.bc-primary-lighter'],
        },
      ],
    },
    headings: {
      name: 'Headings',
      rules: opts => [
        {
          selector: '.site-heading',
          inherits: ['.serif', '.txt-xxxl', '.center'],
        },
        {
          selector: '.section-heading',
          inherits: [
            '.txt-lg',
            '.sans-serif',
            '.upper',
            '.ls-lg',
            '.bb',
            '.bc-gray-lighter',
            '.pb-xs',
            '.lh-sm',
            '.mb-lg',
          ],
        },
        {
          selector: '.subsection-heading',
          inherits: ['.txt-lg', '.serif', '.lh-sm', '.mt-md', '.fw-normal'],
        },
      ],
    },
    container: {
      name: 'Container',
      rules: opts => [
        {
          selector: '.container',
          properties: { 'max-width': '42em' },
          inherits: ['.mx-auto'],
        },
      ],
    },
    quotes: {
      name: 'Quotes',
      rules: opts => [
        {
          selector: '.big-quote',
          inherits: ['.lh-md', '.serif', '.txt-lg', '.fw-1', '.italic'],
        },
      ],
    },
    portfolio: {
      name: 'Portfolio',
      rules: opts => [
        {
          selector: '.portfolio-item',
          inherits: ['.my-xl'],
        },
        {
          selector: '.portfolio-image',
          inherits: ['.mw-100', '.mt-md', '.mb-sm', '.bs-1'],
        },
      ],
    },
  },
}
