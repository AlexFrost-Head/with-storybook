import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Example: Story = {
    args: {
        imgSrc: "https://picsum.photos/300/200",
        imgAlt:'Card Image',
        label: "LABEL HEADING",
        title: "Content card heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum augue vitae odio tincidunt, id commodo tellus finibus. Sed efficitur lorem eget fermentum lacinia. Quisque sit amet diam enim.",
        buttonText: "Learn More",
        link: "cardPage"
    }
};