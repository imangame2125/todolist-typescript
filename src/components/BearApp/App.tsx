import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bear } from '../models'
import ListBears from './ListBears'
import NavigationButtos from './NavigationButtos'




const BearApp: FC = () => {

  const [bearList, setBearList] = useState<Bear[]>([])
  const [pageIndex,setPageIndex] = useState<number>(1)


  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(response => response.json())
      .then((data) => {
        setBearList(data)
      })
  }, [])
  return (
    <div>
      <ListBears bears={bearList} pageIndex={pageIndex}  />
      <NavigationButtos/>
    </div>
  )
}

export default BearApp
