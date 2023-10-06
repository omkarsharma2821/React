import React from 'react'
import { Circle, Image, Layer, Line, Rect, Stage, Text } from 'react-konva'
import useImage from 'use-image'

const LoadImage = ({source}) =>{
    const [image] = useImage('/logo192.png');
    return <Image image={image} draggable/>
}
const MemeImage = ({source}) =>{
    const [image] = useImage('/meme.png');
    return <Image image={image} draggable/>
}

const MemeCreator = () => {
  return (
    <div>
    <div className='container'>
        <h1 className='text-center'>Meme Creator</h1>
        <hr />
        <Stage width={600} height={300}>
            <Layer>
                <Rect 
                    x={0}
                    y={0}
                    width={100}
                    height={100}
                    fill='red'
                    stroke={'yellow'}
                    strokeWidth={2}
                />
                <Rect 
                    x={100}
                    y={50}
                    width={100}
                    height={100}
                    fill='red'
                    stroke={'yellow'}
                    strokeWidth={2}
                />
                <Circle 
                    x={200}
                    y={200}
                    radius={50}
                    fill='black'
                    stroke={'red'}
                    draggable
                />
                <Line x = {200} y={200} points={[0,0,100,100,100,0,0,100]} stroke={"blue"} tension={0.2} closed/>
                <LoadImage />
                                        
            </Layer>
            </Stage>
            <Stage width={800} height={400}>
                <Layer>
                    <MemeImage />
                    <Text 
                        text='JavaScript'
                        fontSize={50}
                        x={300}
                        y={50}
                    />
                    <Text 
                        text='React'
                        fontSize={50}
                        x={300}
                        y={300}
                    />
                </Layer>

            </Stage>
        
    </div>
    </div>
  )
}

export default MemeCreator