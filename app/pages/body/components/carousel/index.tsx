'use client'
import React from "react";
import WaterWave from 'react-water-wave';
import avatar from "../../../../../public/avatar.png"
export const Carousel = ()=>{
    console.log('avatar', avatar)
    return(
        <WaterWave
            // imageUrl={"https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            imageUrl={"/avatar.png"}
            style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
            priority={true}
        >
            {({ pause, play }) => (
                <div className="container">
                    123123
                </div>
            )}
        </WaterWave>

    )
}