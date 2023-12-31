import axios from "axios";
import { useEffect, useState} from "react";

function Exam() {
let [questions,setQuestions]=useState([])
let [answer,setAnswer]=useState([]);
useEffect(()=> {
    //alert("Hello");  
    axios.get("http://localhost:3000/questions").
    then(result=> {
       // console.log(result.data)
        setQuestions(result.data);
    }).
    catch(error=> {
        console.log(error);
    }) 
    axios.get("http://localhost:3000/answers").
    then(result=> {
        //console.log(result.data)
        setAnswer(result.data);
    }).
    catch(error=> {
        console.log(error);
    });
}, [])
let mm = new Map();
let getSelectedAns = function(event,qid,ans){
   // console.log(qid+" "+ans);
    console.log(qid+" "+ans);
    mm.set(qid,ans); // key as qid and value as ans in map object.
                     //key is unique and value can be duplicate 
     console.log(mm);   // hold qid and selected ans 
     console.log(answer);        // hold correct ans with qid 
}
let question = questions.map(q=> 
    <div>
        {q.qid} {q.question}?<br/>
        <input type="radio" name={q.qid} value={q.ans1}onClick={(event)=> {
            getSelectedAns(event,q.qid,q.ans1);
            alert("That's wrong ans! Please try again");
        }}/>{q.ans1}

        <input type="radio" name={q.qid} value={q.ans2}onClick={(event)=> {
            getSelectedAns(event,q.qid,q.ans2);
            alert("Congratulations! that's the Correct Ans.");
        }}/>{q.ans2}
        <input type="radio" name={q.qid} value={q.ans3}onClick={(event)=> {
            getSelectedAns(event,q.qid,q.ans3);
            alert("That's wrong ans! Please try again");
        }}/>{q.ans3}
        <input type="radio" name={q.qid} value={q.ans4}onClick={(event)=> {
            getSelectedAns(event,q.qid,q.ans4);
            alert("That's wrong ans! Please try again");
        }}/>{q.ans4}
    </div>    
)
    return(
    <div>
        <h2>Phase 4 Project: Online Test App</h2>
        <h3>Examiner: Jones Banabale</h3>
        <h3>QUIZ, Time: 15mins</h3>
        {question}
    </div>
    )
}

export default Exam;