import { styled } from "@mui/system";
import React from "react";
import { useDragLayer } from "react-dnd";

type StyledPreviewProps = {
    x: number,
    y: number
}

const StyledPreview = styled('div')<StyledPreviewProps>(props => ({
    padding: '1rem',
    fontWeight: 'bold',
    position: 'fixed',
    pointerEvents: 'none',
    left: 0,
    top: 0,
    transform: `translate(${props.x}px, ${props.y}px) rotate(0deg)`,
    background: 'wheat'
}))

const Preview = () => {
const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
}));

const { x, y } = currentOffset || {x:0, y:0};

    return isDragging ? (
        <StyledPreview x={x} y={y}>
            {item.header}
        </StyledPreview>
    ) : null;
};

export default Preview;
