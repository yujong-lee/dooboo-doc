# dooboo-doc
Automated Document Generation for React Component written in Typesript. 

(Development in progress)

# Example
```ts
interface Styles {
  container: ViewStyle;
  onElementContainer: StyleProp<ViewStyle>;
  circleColorOff?: string;
}

interface Props {
  theme?: DoobooTheme;
  styles?: Styles;
  duration?: number;
  onElement?: ReactElement;
  onPress: () => void;
}
```

This is result of `parse()` of above code.

```js
[
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
]
```