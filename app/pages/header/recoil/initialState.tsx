import {atom, selector} from "recoil";
export const HEADER_TITLE= atom({
    key:'title',
    default:[
        {
            id: 1,
            title:'home',
            ref:'homeRef'
        },
        {
            id: 2,
            title:'about',
            ref:'aboutRef'
        },
        {
            id: 3,
            title:'resume',
            ref:'resumeRef'
        },
        {
            id: 4,
            title:'project',
            ref:'projectRef'
        },

    ]

})

export const getHeaderTitle = selector({
    key:'getTitle',
    get:({get})=>{
        const data = get(HEADER_TITLE)
        return data
    },
    set:({get,set},newValue) =>{
        console.log(newValue)
    }
})