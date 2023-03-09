import op0 from "../sound/op0.mp3"
import op1 from "../sound/op1.mp3"
import op2 from "../sound/op2.mp3"
import op3 from "../sound/op3.mp3"
import op4 from "../sound/op4.mp3"
import ask from "../sound/stage1_ask.mp3"
import name1 from "../sound/stage1_name1.mp3"
import name2 from "../sound/stage1_name2.mp3"
import what from "../sound/stage1_what.mp3"
import ask2 from "../sound/stage2_ask.mp3"
import ans1 from "../sound/stage2_ans1.mp3"
import ans2 from "../sound/stage2_ans2.mp3"
import ask3 from "../sound/stage3_ask.mp3"
import no3 from "../sound/stage3_no.mp3"
import yes3 from "../sound/stage3_yes.mp3"
import ask4 from "../sound/stage4_ask.mp3"
import no4 from "../sound/stage4_no.mp3"
import ask5 from "../sound/stage5_ask.mp3"
import no5 from "../sound/stage5_no.mp3"


export const sound = [
    [op0,op1,op2,op3,op4],
    [ask,name1,name2,what],
    [ask2,ans1,ans2,what],
    [ask3,yes3,no3,what],
    [ask4,no4,yes3,what],
    [ask5,yes3,no5,what]
]