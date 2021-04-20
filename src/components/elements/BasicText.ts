import styled, { css } from 'styled-components'

const BasicText = styled.p<{ profile?: boolean; job?: boolean }>`
  color: ${props => props.theme.gray_primary};
  font-size: ${props => props.theme.font_size_primary};

  ${props =>
    props.profile &&
    css`
      text-align: center;
      color: ${props => props.theme.white_primary};
    `}

  ${props =>
    props.job &&
    css`
      text-align: center;
      color: ${props => props.theme.white_primary};
      font-size: ${props => props.theme.font_size_secondary};
      margin-bottom: 40px;
    `}
`

export default BasicText
