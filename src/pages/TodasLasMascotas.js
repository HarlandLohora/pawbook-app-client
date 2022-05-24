import React, { useState, useEffect } from 'react'
import { Card } from 'antd';
import axios from 'axios';
const { Meta } = Card;

const TodasLasMascotas = () => {
    useEffect(() => {
        axios.get("http://localhost:5005/api/mascotas/all")
            .then(datos => console.log(datos.data))
            .catch(console.log)
    }, [])
    return (
        <div>TodasLasMascotas

            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default TodasLasMascotas