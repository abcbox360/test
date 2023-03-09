import styled from 'styled-components'

const CreateContainer = styled.div`
width: 320px;
border: 0.1rem dashed;
border-radius: 1rem;
padding: 0.5rem 1.2rem;
margin: 0.5rem;
`

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: end;
width: 100%;
margin-top: 0.5rem;
`
const Title = styled.div`

`
const Item = styled.div`
display: flex;
align-items: center;
margin: 0.2rem
`

const Input = styled.input`
width: 200px;
height: 25px;
text-align: center;
`
const Select = styled.select`
width: 200px;
height: 25px;
text-align: center;
overflow:scroll;
`
const Option = styled.option`
text-align: center;
`
function CreateItem(props) {
    const bank = ['','現金', '大戶卡', '嘟嘟卡', '儲值卡',
        '大戶(軒)', '大戶(霖)', '華南(軒)', '將來(軒)', '將來(霖)'
        , '兆豐(霖)', '黑狗(軒)', 'Bankee', 'Line Bank', 'Newnew Bank']
    const itemClass = ['','薪資', '額外收入', '小計', '餐費', '飲料', '交際',
        '運動', '娛樂', '交通', '寵物', '家用', '衣物', '瓦斯', '網路',
        '醫療', '進修', '水電', '結婚']
    let {state} = props

    return (
        <CreateContainer>
            <Title>新增資料</Title>
            <ItemContainer>
                <Item>日期：<Input type="date" onChange={(e)=>state.date = e.target.value}></Input></Item>
                <Item>金額：<Input onChange={(e)=>state.money=e.target.value}></Input></Item>
                <Item>項目：<Input onChange={(e)=>state.content=e.target.value}></Input></Item>
                <Item>銀行：<Select onChange={(e)=>state.bank=e.target.value}>
                    {bank.map(b => <Option key={b} id={b} >{b}</Option>)}
                </Select ></Item>
                <Item>類別：<Select onChange={(e)=>state.class=e.target.value}>
                    {itemClass.map(i => <Option key={i} id={i} >{i}</Option>)}
                </Select ></Item>
                <Item>誰花的：<Select onChange={(e)=>state.who=e.target.value}>
                    <Option></Option>
                    <Option id="霖">霖</Option>
                    <Option id="軒">軒</Option>
                    <Option id="-">-</Option>
                </Select ></Item>
            </ItemContainer>
        </CreateContainer>
    )
}

export default CreateItem