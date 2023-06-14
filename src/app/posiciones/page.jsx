'use client'
import Table from '@/components/table/Table'
import React, { useMemo } from 'react'

const posciones = [
  {
    id: 1,
    nombre: 'Liverpool',
    PJ: 34,
    PG: 8,
    PE: 7,
    PP: 19,
    GF: 32,
    PT: 31

  },
  {
    id: 2,
    nombre: 'Leeds United',
    PJ: 34,
    PG: 14,
    PE: 7,
    PP: 13,
    GF: 40,
    PT: 49
  },
  {
    id: 3,
    nombre: 'West Ham United',
    PJ: 36,
    PG: 14,
    PE: 6,
    PP: 16,
    GF: 33,
    PT: 48
  },
  {
    id: 4,
    nombre: 'Manchester City',
    PJ: 34,
    PG: 8,
    PE: 2,
    PP: 24,
    GF: 43,
    PT: 26
  },
  {
    id: 5,
    nombre: 'Arsenal',
    PJ: 30,
    PG: 7,
    PE: 8,
    PP: 15,
    GF: 24,
    PT: 29
  },
  {
    id: 6,
    nombre: 'Tottenham Hotspur',
    PJ: 38,
    PG: 12,
    PE: 4,
    PP: 22,
    GF: 21,
    PT: 40
  },
  {
    id: 7,
    nombre: 'Leicester City',
    PJ: 31,
    PG: 9,
    PE: 7,
    PP: 15,
    GF: 27,
    PT: 34
  },
  {
    id: 8,
    nombre: 'Chelsea',
    PJ: 27,
    PG: 13,
    PE: 5,
    PP: 9,
    GF: 46,
    PT: 44
  }
]

const Posiciones = () => {
  const dataTable = useMemo(() => posciones, [posciones])

  const columns = useMemo(
    () => [
      {
        Header: 'Equipo',
        accessor: 'nombre',
        filter: 'includes' // new
      },
      {
        Header: 'PJ',
        accessor: 'PJ',
        filter: 'includes' // new
      },
      {
        Header: 'PG',
        accessor: 'PG',
        filter: 'includes' // new
      },
      {
        Header: 'PE',
        accessor: 'PE',
        filter: 'includes' // new
      },
      {
        Header: 'PP',
        accessor: 'PP',
        filter: 'includes' // new
      },
      {
        Header: 'GF',
        accessor: 'GF',
        filter: 'includes' // new
      },
      {
        Header: 'PT',
        accessor: 'PT',
        filter: 'includes' // new
      }
    ],
    []
  )
  return (
    <div style={{ height: '100%' }} >

      <Table columns={columns} data={dataTable} />

    </div>
  )
}

export default Posiciones
