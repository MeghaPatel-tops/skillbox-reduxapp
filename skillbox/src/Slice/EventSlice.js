import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const createEvent = createAsyncThunk('createEvent',async(eventData)=>{
     let docRef = collection(db,"events");
     let res = await addDoc(docRef,eventData);
     console.log(res.id);
     
     return {id:res.id,msg:"Event successfully created"};
})


const EventSlice = createSlice({
    name:'event',
    initialState:{
        error:null,
        msg:null,
        eventData:[],
        singleEvent:{},
        loading:false,
        eventid:null
    },
    reducers:{
        setEvent:(state,action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createEvent.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(createEvent.fulfilled,(state,action)=>{
            state.eventid=action.payload.id;
            state.msg=action.payload.msg
        })
        .addCase(createEvent.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

export default EventSlice.reducer;