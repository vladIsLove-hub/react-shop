import React, { useState } from 'react'
import MenuButton from '../MenuButton/MenuButton'
import Sidebar from '../Sidebar/Sidebar'
import BookListContainer from '../BookList/BookList'

const MainPage = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <main style={{position: 'relative'}} className="container-fluid">
                <MenuButton setVisible={setVisible} />
                <div className="row d-flex flex-nowrap flex-direction-column-md">
                    <Sidebar setVisible={setVisible} visible={visible} />
                    <BookListContainer />
                </div>
            </main>
        </>
    )
}

export default MainPage