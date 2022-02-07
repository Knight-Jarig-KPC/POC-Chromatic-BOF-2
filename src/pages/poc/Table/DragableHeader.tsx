import { styled } from "@mui/system";
import { useEffect, useMemo, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { HeaderGroup } from "react-table";

type StyledTableCellProps = {
    isDragging?: boolean
}

const StyledTableCell = styled('div')<StyledTableCellProps>((props) => ({
    cursor: 'move',
    opacity: props.isDragging ? 0.3 : 1,
}))

enum ItemType  {
    COLUMN = 'column',
    ROW = 'row'
}



export type Row = {
    id: string
    titleName: string
    url: string
    author: string
    updatedDate: string
    status: string
}

export type Item = {
    id: string
    index: number
    header: string
}

type DraggableHeaderProps = {
    column: HeaderGroup<Row>
    index: number
    reorder: (item: Item, index: number) => void
}

const DraggableHeader = ({ column, index, reorder }: DraggableHeaderProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { id, Header } = column;

    const [, drop] = useDrop({
            accept: ItemType.COLUMN,
            drop: (item: Item) => {
                reorder(item, index);
            }
    });

    const [{ isDragging }, drag, preview] = useDrag({
        type: ItemType.COLUMN,
        item: () => {
        return {
            id,
            index,
            header: Header
        };
        },
        collect: (monitor) => ({
        isDragging: monitor.isDragging()
        })
    });

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    drag(drop(ref));

    const memoizedColumn = useMemo(() => column.render("Header"), [column]);

    return (
        <StyledTableCell ref={ref} isDragging={isDragging} {...column.getHeaderProps()}>
            {memoizedColumn}
        </StyledTableCell>
    );
};

export default DraggableHeader;
