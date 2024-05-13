import type {Meta, StoryObj} from '@storybook/react'

import {SecureDice} from '../'

const meta = {
    title: 'SecureDice',
    component: SecureDice,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SecureDice>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {}
