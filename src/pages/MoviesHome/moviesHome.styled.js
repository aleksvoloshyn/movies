import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Title = styled.h2`
  margin-bottom: 20px;
`
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
export const TrendingList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const TrendingListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 24%;
  margin-bottom: 16px;
  margin-right: 8px;
  // box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
export const TrendingListItemNav = styled(NavLink)``
