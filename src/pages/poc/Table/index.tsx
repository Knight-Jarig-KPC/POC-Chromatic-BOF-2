import { Table as MaUTable, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
import { Column, useTable, useBlockLayout, useResizeColumns, useColumnOrder } from 'react-table'
import { useSticky } from "react-table-sticky"
import update from "immutability-helper"
import DraggableHeader, { Item } from "./DragableHeader"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Preview from "./Preview"

export type Row = {
  id: string
  titleName: string
  url: string
  author: string
  updatedDate: string
  status: string
}

type TableProps = {
  columns: Array<Column<Row>>
  data: Array<Row>
  page: number
  rowPerPage: number
  totalCount: number
  onPageChange: (page: number) => void
}

const Styles = styled('div')({
    padding: '1rem',
    overflow: 'auto',
    height: 500,

    '.MuiTable-root': {
        '.MuiTableHead-root': {
        '.MuiTableCell-root': {
            margin: 0,
            padding: '0.5rem',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',

            position: 'relative',

            ':last-child': {
            borderRight: 0
            },

            '.resizer': {
            display: 'inline-block',
            background: 'blue',
            width: 10,
            height: '100%',
            position: 'absolute',
            right: 0,
            top: 0,
            transform: `translateX(50%)`,
            zIndex: 1,
            touchAction: 'none',
            '&.isResizing': {
                background: 'red'
            }
            }
        }
        }
    }
})

const initialColumnOrder = [
    'titleName',
    'url',
    'author',
    'updatedDate',
    'status'
];

const Table = ({ columns, data, page, rowPerPage, totalCount, onPageChange}: TableProps): JSX.Element => {
    const defaultColumn = React.useMemo(
    () => ({
        minWidth: 30,
        width: 250,
        maxWidth: 500,
    }),
    []
    )
  // Use the state and functions returned from useTable to build your UI
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        // resetResizing, 
        setColumnOrder
    } = useTable({
        columns,
        data,
        defaultColumn,
        initialState: {
        columnOrder: initialColumnOrder
        }
    },
    useBlockLayout,
    useResizeColumns,
    useSticky,
    useColumnOrder,
    )

    const reorder = (item: Item, newIndex: number) => {
        const { index: currentIndex } = item;

        const dragRecord = state.columnOrder[currentIndex];

        setColumnOrder(
            update(state.columnOrder, {
                $splice: [
                [currentIndex, 1],
                [newIndex, 0, dragRecord]
                ]
            })
        );
    };

    // Render the UI for your table
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Styles>
                    <MaUTable {...getTableProps()}>
                        <TableHead>
                            {headerGroups.map(headerGroup => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, i)  => (
                                <TableCell {...column.getHeaderProps()}>
                                    {/* {column.render('Header')}
                                    <div
                                    {...column.getResizerProps()}
                                    className={`resizer ${
                                        column.isResizing ? 'isResizing' : ''
                                    }`}
                                    /> */}
                                    <DraggableHeader
                                        reorder={reorder}
                                        key={column.id}
                                        column={column}
                                        index={i}
                                    />
                                    <div
                                        {...column.getResizerProps()}
                                        className={`resizer ${
                                            column.isResizing ? 'isResizing' : ''
                                        }`}
                                    />
                                </TableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableHead>
                        <TableBody {...getTableBodyProps()}>
                            {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                    )
                                })}
                                </TableRow>
                            )
                            })}
                        </TableBody>
                    </MaUTable>
                </Styles>

                <Preview />
            </DndProvider>
                
            <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={totalCount}
            rowsPerPage={rowPerPage}
            page={page}
            onPageChange={(e, page) => onPageChange(page)}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default Table