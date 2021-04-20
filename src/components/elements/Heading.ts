import styled from 'styled-components'

const Button = styled.h1`
  text-align: center;
  color: ${props => props.theme.white_primary};
  font-size: ${props => props.theme.font_size_heading};
  font-weight: ${props => props.theme.font_weight_primary};
  margin-top: 40px;
  margin-bottom: 10px;
`

export default Button
