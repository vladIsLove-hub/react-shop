import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import MenuButton from '../MenuButton/MenuButton'
import Sidebar from '../Sidebar/Sidebar'
import BookListContainer from '../BookList/BookList'

const MainPage = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <Nav />
            <main style={{position: 'relative'}} className="container-fluid">
                <MenuButton setVisible={setVisible} />
                <div className="row d-flex flex-nowrap">
                    <Sidebar setVisible={setVisible} visible={visible} />
                    <BookListContainer />
                </div>
            </main>
        </>
    )
}

export default MainPage