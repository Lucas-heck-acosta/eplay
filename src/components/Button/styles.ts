import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
