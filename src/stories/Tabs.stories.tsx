import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from 'components/common/Tabs'

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        menu: {
            description: 'Choose a number of tabs that you want to render.',
            name: 'Tabs Menu',
            options: ['A Tab', 'Two Tabs', 'Three Tabs'],
            mapping: {
                'A Tab': ['Tab1'],
                'Two Tabs': ['Tab1', 'Tab2'],
                'Three Tabs': ['Tab1', 'Tab2', 'Tab3']
            }
        },
        JSXList: {
            description: 'Choose a number of components that you want to render.',
            name: 'Component List',
            options: ['A Component', 'Two Components', 'Three Components'],
            mapping: {
                'A Component': [<div>Component 1</div>],
                'Two Components': [<div>Component 1</div>, <div>Component 2</div>],
                'Three Components': [<div>Component 1</div>, <div>Component 2</div>, <div>Component 3</div>]
            }
        }
    }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const POC = Template.bind({})

POC.args = {
    menu: ['Tab1', 'Tab2'],
    JSXList: [<div>Component 1</div>, <div>Component 2</div>]
}

POC.parameters = {
    docs: {
        source: {
          type: 'dynamic'
        },
        description: {
            component: 'To use this Tabs Component just add a title menu into menu props and add The Component which you want to render into JSXList props either.',
        },
    }
}