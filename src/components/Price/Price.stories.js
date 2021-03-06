import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import Price from '.'

<Meta title="360 Menu/Price" component={Price} />

<Canvas>
    <Story name="default">
        <Price amount={123} />
    </Story>
</Canvas>

<Canvas>
    <Story name="small">
        <Price amount={123} size="small"/>
    </Story>
    <Story name="large">
        <Price amount={123} size="large"/>
    </Story>
    <Story name="add price">
        <Price amount={123} size="large" add />
    </Story>
    <Story name="other currency">
        <Price amount={123} size="large" add currency="USD"/>
    </Story>
</Canvas>
