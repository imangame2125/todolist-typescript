import styled from "styled-components";

export const Wrapper = styled.table`
s`

export const TableHead = styled.th`
background:#4caf50;
2px solid #d8d8d8;
color: #fff;
font-weight: 700;
position: sticky;
top: 0;
`

export const Head = styled.thead`
background:#4caf50;
2px solid #d8d8d8;
color: #fff;
font-weight: 700;
position: sticky;
top: 0;
`

export const Body = styled.tbody`

`
export const HeadRow = styled.tr`
display:tableRow;
`

export const Row = styled.tr`

`
export const HeadCell = styled.th`

`

export const Cell = styled.td`

`
export const Link = styled.a`
text-decoration:underline;
color:blue;
`

export const NavigationBtn = styled.button`
font-size: 1.2em;
background: #3498db;
color: #fff;
border: 0.25rem solid #3498db;
border-radius:40px;
padding: 0.85em 0.75em;
margin: 1rem;
transition: width 1.5s;
width: 100px;

&:hover{
  background:#ffddaa;
  color:gray;
  width: 300px;
}
`