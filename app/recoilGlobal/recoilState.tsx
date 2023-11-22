'use client'
import {RecoilRoot} from "recoil";

export const RecoilLayout =({children}:{children: React.ReactNode})=>{
    return(
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}