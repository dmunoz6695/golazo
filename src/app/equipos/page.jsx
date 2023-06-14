/* eslint-disable no-unused-expressions */
'use client'
import Table from '@/components/table/Table'
import React, { useMemo, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

const equipos = [
  {
    id: 1,
    nombre: 'Liverpool'

  },
  {
    id: 2,
    nombre: 'Leeds United'

  },
  {
    id: 3,
    nombre: 'West Ham United'
  },
  {
    id: 4,
    nombre: 'Manchester City'
  },
  {
    id: 5,
    nombre: 'Arsenal'
  },
  {
    id: 6,
    nombre: 'Tottenham Hotspur'
  },
  {
    id: 7,
    nombre: 'Leicester City'
  },
  {
    id: 8,
    nombre: 'Chelsea'
  }
]

function MiFormulario () {
  const { control, handleSubmit, reset, formState: { errors } } = useForm()
  const [data, setData] = useState(equipos)

  const onSubmit = (gg) => {
    setData([...data, gg])
    reset()
  }

  const gg = useMemo(() => data, [data])

  const columns = useMemo(
    () => [
      {
        Header: 'Equipo',
        accessor: 'nombre',
        filter: 'includes'
      }
    ],
    []
  )

  return (
    <>
      <div style={{ height: '80%' }} >

        <Table columns={columns} data={gg} />

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Nombre del equipo
          </label>
          <Controller
            name="nombre"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Manchester city, Liverpool, Arsenal..."{...field} />

            )}
          />
          {errors.nombre && <span>Este campo es requerido</span>}

        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Agregar nuevo equipo
          </button>
        </div>
      </form>
    </>
  )
}

export default MiFormulario
