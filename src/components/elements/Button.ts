import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.blue_primary};
  color: ${props => props.theme.white_secodary};
  border-radius: 8px;
  width: 170px;
  height: 50px;
  border: none;
  font-family: inherit;
  font-size: ${props => props.theme.font_size_primary};
  font-weight: ${props => props.theme.font_weight_primary};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.blue_secondary};
    transition: ${props => props.theme.transition_primary};
  }
`

export default Button
