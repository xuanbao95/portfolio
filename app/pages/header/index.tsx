'use client'
import React from "react";
import Image from 'next/image'
import {StyleHeaderPage} from "./styled";
import {useRecoilState, useRecoilValue} from "recoil";
import {getHeaderTitle, HEADER_TITLE} from "./recoil/initialState";

const HeaderPage = ()=>{
    // const getTitle = useRecoilValue(HEADER_TITLE)
    // const list = getTitle[0]
    // const handleTitle = getTitle[1]
    // console.log(getTitle)
    return(
        <StyleHeaderPage className={'fixed top-0 left-0 h-full overflow-hidden px-20 pt-10 border-slate-700 border-r'}>
            <div className={'rounded-full border-4 border-slate-700 w-fit mb-12'}>
                <Image
                    src={'/avatar.png'}
                    width={179}
                    height={179}
                    alt="Picture of the author"
                    className={'rounded-full'}
                />
            </div>
            <div>

            </div>
        </StyleHeaderPage>
    )
}
export default HeaderPage