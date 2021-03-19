import React from 'react'
import styled from 'styled-components'
import AddBook from '../AddBook/AddBook'
import './sidebar.css'

const Aside = styled.aside`
    transition: all .5s ease;
    padding: 10px 22px;
    overflow-y: auto;
    color: #fff;
    background-color: #212529;
    z-index: 600;
`

const MenuButton = styled.button`
    width: 100%;
    margin-top: 20px;
`

const Sidebar = ({ visible, setVisible }) => {

    return (
        <Aside id="aside" className={`sidebar-hidden sidebar-large sidebar-adaptive-param sidebar-size sidebar-size-md sidebar-size-xs ${visible ? 'sidebar-show' : ''}`}>
            <h2 style={{marginBottom: '20px'}}>Меню</h2>

            <MenuButton className="btn btn-success">Показать дешевые</MenuButton>
            <MenuButton className="btn btn-success">Показать дорогие</MenuButton>
            <MenuButton className="btn btn-success">Показать лучшие</MenuButton>

            <h4 style={{marginTop: '35px'}}>Добавить книгу:</h4>
            <span
             onClick={() => setVisible(prev => !prev)}
             className='sidebar-close-show sidebar-close-hidden'>&times;</span>
            <AddBook />
        </Aside>
    )
}

export default Sidebar