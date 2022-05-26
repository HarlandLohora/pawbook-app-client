import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import axios from 'axios';
const { Meta } = Card;

const TodasLasMascotas = () => {
    const [mascotas, setMascotas] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/mascotas/all`)
            .then(datos => setMascotas(datos.data.mascotas))
            .catch(console.log)
    }, [])
    return (
        <div>TodasLasMascotas
            {
                mascotas.map(mascota => {
                    return (
                        <Link key={mascota._id} to={`/detalle/${mascota._id}`}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={mascota.photo} />}
                            >
                                <Meta title={mascota.name} description={mascota.breed} />
                            </Card>
                        </Link>)
                })
            }

        </div>
    )
}

export default TodasLasMascotas