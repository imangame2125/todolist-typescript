import React, { FC } from 'react'
import styled from 'styled-components'
import { Bear } from '../models'
import { Head, Wrapper, HeadRow, HeadCell, Body, Row, Cell,Link } from './stylesComponentsBear/styles'


interface Props {
  bears: Bear[],
  pageIndex: number,


}


const ListBears: FC<Props> = ({ bears }) => {
  return (
    <div>
      <Wrapper>
        <Head>
          <HeadRow>
            <HeadCell>index</HeadCell>
            <HeadCell>Name</HeadCell>
            <HeadCell>Address</HeadCell>
            <HeadCell>city</HeadCell>
            <HeadCell>phone</HeadCell>
            <HeadCell>state</HeadCell>
            <HeadCell>Zip</HeadCell>
            <HeadCell>website</HeadCell>
          </HeadRow>
        </Head>
        <Body>
          {bears.map((item, index) => {
            return (
              <Row key={item.id.toString()}>
                <Cell>{index + 1}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.street}</Cell>
                <Cell>{item.city}</Cell>
                <Cell>{item.phone}</Cell>
                <Cell>{item.state}</Cell>
                <Cell>{item.postal_code}</Cell>
                <Cell>
                  <Link target='_blank' href={item.website_url}>Link</Link>
                </Cell>
              </Row>
            )
          })}
        </Body>
      </Wrapper>
    </div>
  )
}

export default ListBears
