import { getQS } from "../utils/API"

export const INETIALIZE_QUESTIONS ='INETIALIZE_QUESTIONS'

const qsActionCreator = (questions)=>{
    return {
        type:INETIALIZE_QUESTIONS ,
       questions
    }
}
export const inetialize_QS=()=>{
    return(dispatch)=>{
        return getQS().then((res)=>{
            dispatch(qsActionCreator(res.data))
        })
    }
}