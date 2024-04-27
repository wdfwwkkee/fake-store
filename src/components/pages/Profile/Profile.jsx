import React, { useState } from 'react'

import Header from '../../../layouts/Header/Header'
import Footer from '../../../layouts/Footer'
import { useUser } from '../../../hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'

import EmptyUser from '../../../assets/images/empty_user.png'
import { useDispatch } from 'react-redux'
import { actions } from '../../../Slices/user.slice'


const Profile = () => {

    const navigate = useNavigate();

    const { email, name, avatar, isAuth } = useUser();

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)

    const [userData, setUserData] = useState({
        userName: name,
        userAvatar: avatar,
        userEmail: email,
    })


    function toggleEditMode() {
        editMode ? setEditMode(false) : setEditMode(true);
    }


    function saveChanges() {
        const newData = {
            avatar: userData.userAvatar,
            name: userData.userName
        };
        dispatch(actions.changeUserData(newData))
        toggleEditMode();
    }


    return (
        <div className='profile'>
            <Header />
            <main>

                {isAuth

                    ?

                    <div className="profile-content">
                        <div className="info">
                            <div className="editBtn">
                                <button onClick={toggleEditMode}>{editMode ? "Закончить редактирование" : "Редактировать"}</button>
                            </div>
                            <div className="info_title">
                                <h2>Данные : </h2>
                            </div>
                            {editMode
                                ?
                                <div>
                                    <div className="info_inputs">
                                        <div className="userName">
                                            <span>Name:</span>
                                            <input value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })} style={{ background: 'transparent', border: '1px solid black' }} type="text" />
                                        </div>
                                    </div>
                                    <div className="info_inputs">
                                        <div className="userEmail">
                                            <span>Email:</span>
                                            <input value={userData.userEmail} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                        </div>
                                    </div>
                                    <div className="info_inputs">
                                        <div className="userAvatar">
                                            <span>Avatar:</span>
                                            <input value={userData.userAvatar} onChange={(e) => setUserData({ ...userData, userAvatar: e.target.value })} style={{ background: 'transparent', border: '1px solid black' }} type="text" />
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="info_inputs">
                                        <div className="userName">
                                            <span>Name:</span>
                                            <input value={userData.userName} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                        </div>
                                    </div>
                                    <div className="info_inputs">
                                        <div className="userEmail">
                                            <span>Email:</span>
                                            <input value={userData.userEmail} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                        </div>
                                    </div>
                                    <div className="info_inputs">
                                        <div className="userAvatar">
                                            <span>Avatar:</span>
                                            <input value={userData.userAvatar} disabled style={{ background: 'transparent', border: 'none', opacity: 0 }} type="text" />
                                        </div>
                                    </div>
                                </div>
                            }


                            {editMode
                                ?
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <button onClick={() => (dispatch(actions.logoutUser()), navigate("/fake-store/products", { replace: true }))} className='logOut-btn'>Выйти из аккаунта</button>
                                    <button onClick={saveChanges} className='logOut-btn'>Сохранить</button>

                                </div>
                                : <button onClick={() => (dispatch(actions.logoutUser()), navigate("/fake-store/products", { replace: true }))} className='logOut-btn'>Выйти из аккаунта</button>
                            }

                        </div>
                        <div className="avatar">
                            {avatar ?
                                <img style={{ borderRadius: 15 }} src={userData.userAvatar} alt="" />
                                : <img src={EmptyUser} alt="" />
                            }
                        </div>
                    </div>
                    :

                    <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', flexDirection : 'column', gap : 50 }}>Вы не авторизованы для просмотра профиля
                        <Link to={"/fake-store/sign-in"}>
                            Перейти к авторизации
                        </Link>

                    </div>

                }

                {/* <div className="profile-content">
                    <div className="info">
                        <div className="editBtn">
                            <button onClick={toggleEditMode}>{editMode ? "Закончить редактирование" : "Редактировать"}</button>
                        </div>
                        <div className="info_title">
                            <h2>Данные : </h2>
                        </div>
                        {editMode
                            ?
                            <div>
                                <div className="info_inputs">
                                    <div className="userName">
                                        <span>Name:</span>
                                        <input value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })} style={{ background: 'transparent', border: '1px solid black' }} type="text" />
                                    </div>
                                </div>
                                <div className="info_inputs">
                                    <div className="userEmail">
                                        <span>Email:</span>
                                        <input value={userData.userEmail} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                    </div>
                                </div>
                                <div className="info_inputs">
                                    <div className="userAvatar">
                                        <span>Avatar:</span>
                                        <input value={userData.userAvatar} onChange={(e) => setUserData({ ...userData, userAvatar: e.target.value })} style={{ background: 'transparent', border: '1px solid black' }} type="text" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="info_inputs">
                                    <div className="userName">
                                        <span>Name:</span>
                                        <input value={userData.userName} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                    </div>
                                </div>
                                <div className="info_inputs">
                                    <div className="userEmail">
                                        <span>Email:</span>
                                        <input value={userData.userEmail} disabled style={{ background: 'transparent', border: 'none' }} type="text" />
                                    </div>
                                </div>
                                <div className="info_inputs">
                                    <div className="userAvatar">
                                        <span>Avatar:</span>
                                        <input value={userData.userAvatar} disabled style={{ background: 'transparent', border: 'none', opacity: 0 }} type="text" />
                                    </div>
                                </div>
                            </div>
                        }


                        {editMode
                            ?
                            <div style={{ display: 'flex', gap: 10 }}>
                                <button onClick={() => (dispatch(actions.logoutUser()), navigate("/fake-store/products", { replace: true }))} className='logOut-btn'>Выйти из аккаунта</button>
                                <button onClick={saveChanges} className='logOut-btn'>Сохранить</button>

                            </div>
                            : <button onClick={() => (dispatch(actions.logoutUser()), navigate("/fake-store/products", { replace: true }))} className='logOut-btn'>Выйти из аккаунта</button>
                        }

                    </div>
                    <div className="avatar">
                        {avatar ?
                            <img style={{ borderRadius: 15 }} src={userData.userAvatar} alt="" />
                            : <img src={EmptyUser} alt="" />
                        }
                    </div>
                </div> */}
            </main>
            <Footer />
        </div>
    )
}

export default Profile