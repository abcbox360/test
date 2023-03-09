import {supabase} from "./supabase"
import Header from "./Header"
import HomePage from "./HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';

/*const { data, error } = await supabase
  .from('list')
  .insert([
    { 
        date: '2023/01/02', 
        money: -20,
        bank: '大戶',
        who: '霖',
        content: '內容',
        class: '測試'
 },
  ])

let { data: list, error } = await supabase
  .from('list')
  .select("date,money,bank,who,content,class")

  console.log(list)
  
*/


function App() {
  return <div>
    <Header></Header>
    <HomePage></HomePage>
    </div>
  ;
}

export default App;
