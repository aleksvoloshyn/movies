import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MoviesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const MoviesListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 22%;
  margin-bottom: 16px;
  margin-right: 8px;
  // box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
export const SearchPanel = styled.div`
  display: flex;
  padding-left: 16px;
  gap: 16px;
  justify-content: start;
  align-items: baseline;
`
export const MoviesListItemNav = styled(NavLink)``

export const SearchInput = styled.input`
  width: 400px;
  padding: 12px;
  border: none;
  outline: none;
  margin-bottom: 24px;
  border-radius: 4px;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #fff;
  height: 40px;
  width: 28px;
  border: none;
  background-color: lightcoral;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 4px;
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #fff;
  height: 40px;
  width: 60px;
  border: 1px solid #4682b4;
  background-color: #4682b4;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 4px;
`
