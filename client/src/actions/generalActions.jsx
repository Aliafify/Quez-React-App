import { quizeRank } from "../utils/API"

export const SET_RANK="SET_RANK"
export const NEXT_QS ="NEXT_QS"
export const CORRECT_ANSWERS="CORRECT_ANSWERS"
export const QUESTION_RESULT ="QUESTION_RESULT"
export const NEW_TRY ="NEW_TRY"
const rankAction=(rank)=>{
   return {
    type:SET_RANK,
    rank
   }
}
const qsOrder=()=>{
   return {
      type:NEXT_QS,   
   }
}
const correctAnswers = ()=>{
   return{
      type:CORRECT_ANSWERS,
   }
}
const newTry=()=>{
   return{
      type:NEW_TRY,
   }
}
export const getRank = (scores)=>{
   return (dispatch)=>{
    return quizeRank(scores).then(rank=>{
        dispatch(rankAction(rank))
    })
   }
}
export const nextQS=()=>{
   return(dispatch)=>{
     return dispatch(qsOrder())
   }
}
export const Correct_Answers=()=>{
   console.log('iam here')
   return(dispatch)=>{
     return dispatch(correctAnswers())
   }
}
export const New_Try =()=>{
   return(dispatch)=>{
      dispatch (newTry())
   }
}
