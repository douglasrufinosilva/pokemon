import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styles from './styles.module.css'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useContext } from 'react'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const orderType = [
  {
    name: 'Mais recentes',
    value: 'set.releaseDate',
  },
  {
    name: 'Mais antigos',
    value: '-set.releaseDate',
  },
  {
    name: 'Nome A - Z',
    value: 'name',
  },
  {
    name: 'Nome Z - A',
    value: '-name',
  },
]

export default function InputFilter() {
  const { changeOrderBy, orderBy } = useContext(PokemonContext)

  const selectedOrderBy = orderBy || 'set.releaseDate'

  return (
    <div className={styles.container}>
      <FormControl sx={{ width: '100%' }}>
        <Select
          displayEmpty
          onChange={(e) => {
            changeOrderBy(e.target.value)
          }}
          value={selectedOrderBy}
          input={<OutlinedInput />}
          sx={{ fontSize: '1.4rem' }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {orderType.map((order) => (
            <MenuItem
              sx={{ fontSize: '1.3rem' }}
              key={order.name}
              value={order.value}
            >
              {order.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
