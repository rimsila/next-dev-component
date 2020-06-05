# Button :star:

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

#### Story Source

<!-- SOURCE -->

<!-- STORY HIDE END -->

Next Button.

```js
For usage we have import by two ways:

--> first we use whole bundle 
import { NextButton } from 'next-dev-component';
<NextButton label="Primary Icon" icon={<PoweroffOutlined />} />;
```
```js
--> Second Way use code split to reduce bundle size(Recomment)
import NextButton from 'next-dev-component/lib/component/NextButton';

<NextButton label="Primary Icon" icon={<PoweroffOutlined />} />;
```

#### Button Icon

We can use every icons but now I'm use `Ant icon`. It is possible to use onother icon like fontawesome etc.`.

```js
yarn add @ant-design/icons

import { GithubOutlined } from '@ant-design/icons';

<GithubOutlined />;
```
