'use client'
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'

const Table = ({ data, columns }) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  )

  const [customFilter, setCustomFilter] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('')

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useGlobalFilter,
    useSortBy
  )

  const { globalFilter } = state

  const handleCustomFilterChange = (e) => {
    setCustomFilter(e.target.value)
  }

  const handleSelectedFilterChange = (e) => {
    setSelectedFilter(e.target.value)
    setGlobalFilter('')
    setCustomFilter('')
  }

  const applyCustomFilter = () => {
    setGlobalFilter(customFilter)
    setSelectedFilter('')
  }

  const handleResetFilter = () => {
    setGlobalFilter('')
    setCustomFilter('')
    setSelectedFilter('')
  }

  return (
    <div className="container mx-auto p-4">

      <div className="flex items-center mb-4">
        <select
          value={selectedFilter}
          onChange={handleSelectedFilterChange}
          className="mr-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Filtrar por</option>
          {columns.map((column) => (
            <option key={column.accessor} value={column.accessor}>
              {column.Header}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={customFilter}
          onChange={handleCustomFilterChange}
          placeholder="Equipo, PT, PJ..."
          className="mr-2 p-2 border border-gray-300 rounded-md"
        />

        <button
          onClick={applyCustomFilter}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Aplicar filtro
        </button>
        <button
          onClick={handleResetFilter}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 ml-2"
        >
          Reiniciar
        </button>
      </div>

      <table className="w-full">
        <thead >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`py-2 px-4 ${
                    column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''
                  }`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='bg-slate-300' {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

const DefaultColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Filter ${column.Header}`}
    />
  )
}
export default Table
