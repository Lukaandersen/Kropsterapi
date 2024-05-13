import { Builder, withChildren } from '@builder.io/react';  // import withChildren

export const TestBlock = props =>
  <div>{props.children}</div>

// pass your custom component to withChildren()
const TestBlockWithBuilderChildren = withChildren(TestBlock)
