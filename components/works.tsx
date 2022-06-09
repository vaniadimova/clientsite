import React from 'react'
import Image from 'next/image'
import {  Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'

const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
        <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile 
            page={0} 
            renderContent={({ progress }) =>  (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div> Best quality on the market!</div>
                        <div className='text-4xl font-semibold tracking-tight md:text-5xl'>Enjoy the taste</div>
                        <WorkLink href='https://karlovo.com/'>Order here</WorkLink>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    <Image 
                    src="/assets/works/file.png" 
                    layout='responsive' 
                    width={840} 
                    height={1620} 
                    alt='fillet' />
                </WorkRight>
                </WorkContainer>)}
        ></Tile>
        <Tile 
            page={1} 
            renderContent={({ progress }) =>  (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Custormer satisfaction is our priority!</div>
                        <div className='text-4xl font-semibold tracking-tight md:text-5xl'>Karlovo store</div>
                        <WorkLink href='https://karlovo.com/'>Order here</WorkLink>
                    </WorkLeft>
                <WorkRight progress={progress}>
                    <Image 
                    src="/assets/works/store.png" 
                    layout='responsive' 
                    width={840} 
                    height={1620} 
                    alt='karlovo' />
                </WorkRight>
                </WorkContainer>
         
        )}
        ></Tile>
        <Tile 
            page={2} 
            renderContent={({ progress }) =>  (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                    <div>Shop Online or visit our store! </div>
                    <div className='text-4xl font-semibold tracking-tight md:text-4xl'>Click to order</div>
                    <WorkLink href='https://karlovo.com/'>Order here</WorkLink>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    <Image 
                    src="/assets/works/meco.png" 
                    layout='responsive' 
                    width={840} 
                    height={1620} 
                    alt='meco' />
                </WorkRight>
              </WorkContainer>
           
        )}
        ></Tile>
        </TileContent>
    </TileWrapper>
)

export default Works