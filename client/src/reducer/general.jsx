import { SET_RANK ,NEXT_QS,CORRECT_ANSWERS,QUESTION_RESULT,NEW_TRY} from "../actions/generalActions"

export const general =(state={rank:null,order:0,correct:0},action)=>{
    switch(action.type){
        case SET_RANK:
            return state ={...state,rank:action.rank}
        case NEXT_QS:
            return {...state,order:state.order+1,result:""}
            case NEW_TRY:
            console.log("reducer")
            return{...state,order:0}
        case CORRECT_ANSWERS:
            return {...state,correct:state.correct+1}
        case QUESTION_RESULT:
            return {...state,result:action.result}
        default : return state
    }
}