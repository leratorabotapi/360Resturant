import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import Size from '.'

<Meta title="360 Menu/Size" component={Size} />

<Canvas>
    <Story name="default">
        <Size children={123} />
    </Story>
</Canvas>

<Canvas>
    <Story name="light">
        <Size children={123} type="light"/>
    </Story>
    <Story name="dark">
        <Size children={123} type="dark"/>
    </Story>
</Canvas>
