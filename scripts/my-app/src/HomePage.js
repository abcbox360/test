import styled from 'styled-components'
import CreateItem from './CreateItem'
import { supabase } from "./supabase"
import { useState, useRef } from "react"

const HomePageContainer = styled.div`
margin-top: 3rem;
text-align: center;
`
const CreateListContainer = styled.div`
display: flex;
justify-content: center;
padding: 2rem 0 0 0;
width: 100%;
`
const Ok = styled.div`

`
const LastList = styled.div`
display:flex;
width: 100%;
flex-direction: column;
max-width: 1000px;
margin: auto;
`
const TableTitle = styled.div`
width: 15%;
text-align:center;
padding: 0.2rem;
border-right: 0.1rem dashed rgba(0,0,0,0.2);
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
&:nth-child(2) {
    width:25%;
}
&:last-child {
    border: none;
}
@media screen and (max-width:675px) {
    width:25%;
    border: none;
    &:nth-child(1) {
        width:30%;
    }
    &:nth-child(2) {
        width:70%;
    }
}
`
const TableRow = styled.div`
display:flex;
border-bottom: 0.1rem dashed rgba(0,0,0,0.2);
&:first-child {
    border-top: 0.1rem dashed rgba(0,0,0,0.2);
}
&:hover {
    background: rgba(0,0,0,0.2);
}
&:first-child:hover {
    background: none;
}
@media screen and (max-width:675px) {
    flex-wrap: wrap;
    border-radius: 10px;
    border: 0.1rem dashed rgba(0,0,0,0.2);
    margin: 0.2rem;
    &:first-child:hover {
        background: rgba(0,0,0,0.2);
    }
}
`
const TableItem = styled(TableTitle)`
&:nth-child(2) {
    text-align: left;
}
&:nth-child(3) {
    text-align: right;
}
@media screen and (max-width:675px) {
    &:nth-child(1) {
        border-bottom: 0.1rem deshed
    }
    &:nth-child(2) {
    }
}
`
const Money = styled(TableItem)`
${props => props.$active ? `color: blue` : `color:red`}
`
let { data: lists, error } = await supabase
    .from('list')
    .select("id,date,money,bank,who,content,class")
    .range(0, 19)

function HomePage() {
    const ww = window.innerWidth
    const state1 = {}
    const state2 = {}
    const state3 = {}

    return <HomePageContainer>
        <CreateListContainer>
            <CreateItem state={state1}/>
            {ww > 675 && <CreateItem state={state2}/>}
            {ww > 1000 && <CreateItem state={state3}/>}
        </CreateListContainer>
        <Ok onClick={()=>console.log("state1:"+state1.bank+"state2:"+state2.date)}>新增</Ok>
        <LastList>
        {ww > 675 &&<TableRow>
            <TableTitle>日期</TableTitle>
            <TableTitle>項目</TableTitle>
            <TableTitle>金額</TableTitle>
            <TableTitle>銀行</TableTitle>
            <TableTitle>類別</TableTitle>
            <TableTitle>誰花的</TableTitle>
        </TableRow>}
            {lists.map(list => <TableRow key={list.id}>
                <TableItem>{list.date}</TableItem>
                <TableItem>{list.content}</TableItem>
                <Money $active={list.money > 0}>{list.money}{ww < 675 && '元'}</Money>
                <TableItem>{list.bank}</TableItem>
                <TableItem>{list.class}</TableItem>
                <TableItem>{list.who}</TableItem>
            </TableRow>)}
        </LastList>
    </HomePageContainer>
}

export default HomePage