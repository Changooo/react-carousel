import React, { useState } from 'react'
import Carousel from './Carousel'
import { Button, ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function Layout(){
    const [year, setYear] = useState(2020); 
    return (
        <div className="layout">
            <h1 className="title"> 글로벌 IT 전문가와 킹고인의 만남</h1>
            <ButtonGroup className="buttonGroup">
                <DropdownButton variant="secondary" as={ButtonGroup} title="prev ">
                <Dropdown.Item value="2018" onclick={e=> setYear(e.target.value)} eventKey="1">2018</Dropdown.Item>
                <Dropdown.Item value="2019" onclick={e=> setYear(e.target.value)} eventKey="2">2019</Dropdown.Item>
                </DropdownButton>
                <Button value="2020" onclick={function() { alert("어쩌라구") }} variant="secondary">20</Button>
                <Button value="2021" onclick={e=> setYear(e.target.value)} variant="secondary">21</Button>
            </ButtonGroup>
            <Carousel year={year}/>
        </div>
    );
}

export default Layout;