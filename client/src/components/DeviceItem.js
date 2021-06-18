import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.svg'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={4} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 250, height: 240, cursor: 'pointer'}} border={"light"}>
                <Image style={{display: 'block', width: '100%', height: 150, objectFit: 'contain'}} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 px-2 d-flex justify-content-between align-items-center">
                    <div>{device.type.name} {device.brand.name}</div>
                    <div className="d-flex align-items-center">
                        <div className="mr-1">{device.rating}</div>
                        <Image width={14} height={14} src={star}/>
                    </div>
                </div>
                <div className="px-2">{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
