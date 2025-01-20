/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'
import Pagination from '@mui/material/Pagination'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import InputSearch from '../../components/InputSearch'
import InputFilter from '../../components/InputFilter'
import CardPokemon from '../../components/CardPokemon'
import styles from './styles.module.css'
import CardDetailsPokemon from '../../components/CardDetailsPokemon'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#FFFFFF',
  borderRadius: '10px',
  outline: 'none',
  boxShadow: 24,
  overflow: 'hidden',
  width: '90%',
  maxWidth: '400px',
}

const Home = () => {
  const [open, setOpen] = React.useState(false)
  const [pokemonId, setPokemonId] = useState(null)
  const [pokemon, setPokemon] = useState({})

  const {
    pokemons,
    loading,
    page,
    totalPokemons,
    changePage,
    pokemonsPerPage,
  } = useContext(PokemonContext)

  useEffect(() => {
    if (pokemonId) {
      const API_KEY = import.meta.env.VITE_API_KEY

      fetch(`https://api.pokemontcg.io/v2/cards/${pokemonId}`, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data.data)
        })
        .catch((error) => {
          console.error(`Erro ao buscar os detalhes do pokemon: ${error}`)
        })
    }
  }, [pokemonId])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [page])

  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage)

  const handleOpen = (id) => {
    setOpen(true)
    setPokemonId(id)
  }

  const handleClose = () => setOpen(false)

  if (loading) {
    return <div className={styles.loading}>Carregando Pokemons...</div>
  }

  return (
    <main className={styles.main}>
      <div className={styles.inputContainer}>
        <InputSearch />
        <InputFilter />
      </div>
      <div className={styles.totalLabel}>
        Total:
        <span className={styles.total}>{totalPokemons} Pokemons</span>
      </div>
      <div className={styles.cardContainer}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <a onClick={() => handleOpen(pokemon.id)}>
              <CardPokemon pokemon={pokemon} />
            </a>
          </div>
        ))}
      </div>

      <Stack spacing={2}>
        <Pagination
          page={page}
          count={totalPages}
          boundaryCount={0}
          siblingCount={1}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => changePage(value)}
          sx={{
            pb: 3,
            '& ul': {
              display: 'flex',
              justifyContent: 'center',
            },
          }}
        />
      </Stack>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardDetailsPokemon handleClose={handleClose} pokemon={pokemon} />
          </Box>
        </Fade>
      </Modal>
    </main>
  )
}

export default Home
