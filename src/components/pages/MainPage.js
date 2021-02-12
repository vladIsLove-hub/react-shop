import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import MenuButton from '../MenuButton/MenuButton'
import Sidebar from '../Sidebar/Sidebar'

const MainPage = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <Nav />
            <main style={{position: 'relative'}} className="container-fluid">
                <MenuButton setVisible={setVisible} />
                <div className="row">
                    <Sidebar setVisible={setVisible} visible={visible} />
                </div>
            </main>
        </>
    )
}

export default MainPage