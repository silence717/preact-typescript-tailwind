import { h, VNode } from 'preact';
import { Nps } from 'components/ui'
import { APP_NAME } from 'scripts/constants'

import './style.scss';

interface Props {
    color?: string;
}

export default function App(props: Props): VNode {
    return (
        <div className="flex-col justify-center items-center">
            <h1 style={{ color: props.color }}>Hello, World~ {APP_NAME}</h1>
            <h2 className="text-pink-500">best tailwindcss </h2>
            <Nps code={'field-1'} label="您有多大可能推荐我们" />
        </div>
    );
}
