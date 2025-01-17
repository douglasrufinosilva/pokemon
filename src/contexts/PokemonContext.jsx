/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [pokemonsPerPage] = useState(24)

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY

    setLoading(true)

    let url = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pokemonsPerPage}`
    if (filter) {
      url += `&q=name:${filter}`
    }

    fetch(url, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.data)
        setTotalPokemons(data.totalCount)
        setLoading(false)
      })
      .catch((error) => {
        console.log(`Erro ao buscar os dados: ${error}`)
        setLoading(false)
      })
  }, [page, filter, pokemonsPerPage])

  const changePage = (value) => {
    setPage(value)
  }

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
    setPage(1)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        page,
        totalPokemons,
        changePage,
        changeFilter,
        pokemonsPerPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
