import React from 'react';
interface DragResizeProps extends React.HTMLProps<HTMLDivElement> {
    onResize: ({ width, x }: {
        width: number;
        x: number;
    }) => void;
    onResizeEnd?: ({ width, x }: {
        width: number;
        x: number;
    }) => void;
    onBeforeResize?: () => void;
    minWidth?: number;
    type: 'left' | 'right' | 'move';
    grid?: number;
    scroller?: HTMLElement;
    defaultSize: {
        width: number;
        x: number;
    };
    autoScroll?: boolean;
    onAutoScroll?: (delta: number) => void;
    reachEdge?: (position: 'left' | 'right') => boolean;
    clickStart?: boolean;
    disabled?: boolean;
}
declare const _default: React.FunctionComponent<DragResizeProps>;
export default _default;
