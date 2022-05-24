import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Button, Tooltip, Input, Checkbox } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

const DetailPage = (props) => {
    const { id } = useParams()
    const [mascota, setMascota] = useState({})
    //toggle
    const [showEdit, setShowEdit] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5005/api/mascotas/details/${id}`)
            .then(lainfo => {
                console.log(lainfo)
                setMascota(lainfo.data)
            })
            .catch(console.log)
    }, [id])
    //truthy
    return (
        <div>

            {showEdit === false && (
                <>
                    <Image src={mascota.photo} alt={mascota.name} width={200} />
                    <p>{mascota.name}</p>
                    <p>{mascota.age}</p>
                    <p>{mascota.breed}</p>
                </>
            )}
            {
                showEdit === true && (
                    <div>
                        <Input placeholder='Nombre' value={mascota.name} />
                        <Input placeholder='Raza' value={mascota.breed} />
                        <Input placeholder='Edad' value={mascota.age} />
                        <Input placeholder='Foto' value={mascota.photo} />
                        <Checkbox checked={mascota.pedigree}>Pedigree</Checkbox>
                        {props.user?._id}
                        <Button type='outline'>Actualizar</Button>
                    </div>
                )
            }

            <Tooltip title="Editar">
                <Button
                    type="primary"
                    shape="circle"
                    icon={<EditOutlined />}
                    onClick={() => setShowEdit(true)}
                />
            </Tooltip>
            <Tooltip title="Eliminar">
                <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
            </Tooltip>
        </div >
    )
}

export default DetailPage