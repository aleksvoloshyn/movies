import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Panel = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 5px 5px -5px rgb(34 60 80 / 60%);
`
export const PanelList = styled.nav`
  display: flex;
  gap: 20px;
`
export const PanelListItem = styled(NavLink)`
  &.active {
    color: salmon;
  }
`
