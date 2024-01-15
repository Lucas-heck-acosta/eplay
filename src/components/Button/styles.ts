import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border-radius: 8px;
  background-color: ${(props) =>
    props.variant ? colors.green : 'transparent'};
  border: 2px solid ${(props) => (props.variant ? colors.green : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
