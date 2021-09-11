import getConfig from './getConfig';
import parse from './parse';

jest.mock('./getConfig.js');

describe('parse', () => {
  getConfig.mockReturnValue({ path: './testData/interface.ts' });

  it('parses interface', () => {
    expect(parse()).toEqual([
      {
        name: 'Styles',
        properties: [
          {
            name: 'container',
            optional: false,
            type: 'ViewStyle',
          },
          {
            name: 'onElementContainer',
            optional: false,
            type: 'StyleProp<ViewStyle>',
          },
          {
            name: 'circleColorOff',
            optional: true,
            type: 'String',
          },
        ],
      },
      {
        name: 'Props',
        properties: [
          {
            name: 'theme',
            optional: true,
            type: 'DoobooTheme',
          },
          {
            name: 'styles',
            optional: true,
            type: 'Styles',
          },
          {
            name: 'duration',
            optional: true,
            type: 'Number',
          },
          {
            name: 'onElement',
            optional: true,
            type: 'ReactElement',
          },
          {
            name: 'onPress',
            optional: false,
            type: '(String) => Void',
          },
        ],
      },
    ]);
  });
});
