import { INETIALIZE_QUESTIONS } from "../actions/questions";
export const QS =(state=[],action)=>{
    switch(action.type){
        case INETIALIZE_QUESTIONS:
            return state =action.questions
        default : return state
    }
}