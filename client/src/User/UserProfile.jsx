import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserProfile.css';
import SingleBanner from '../components/Banners/SingleBanner';
import UserSidebar from '../components/UserProfile/UserSidebar';
import AccountSettings from '../components/UserProfile/AccountSettings';
import ChangePassword from '../components/UserProfile/ChangePassword';
import YourBooks from '../components/UserProfile/YourBooks';
import Premium from '../components/UserProfile/Premium';
import LegalNotice from '../components/UserProfile/LegalNotice';

const UserProfile = () => {
    const { username, activepage } = useParams();
    const [user, setUser] = useState();

    // console.log(username);
    const fetchUserData = async () => {
        try {
            axios.post("http://localhost:3001/get-user", { username }).then((res) => {
                // console.log(res.data.message, res.data.user);
                setUser(res.data.user)
            })
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };
    useEffect(() => {
        if (!user)
            fetchUserData();
    }, []);

    // console.log(user);
    return (
        <div className='userprofile'>
            <SingleBanner
                heading={`My Profile`}
                bannerimage='https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            {/* Display the profile photo at the top */}
            <img
                src={user?.profileimage}
                alt="Profile"
                className="userProfilePhoto"
                onError={(e) => {
                    e.target.src = '../../public/assests/explore.png'; // Set default image path on error
                }}
            />
            <div className='userprofilein mt-4'>
                <div className='left'>
                    <UserSidebar activepage={activepage} />
                </div>
                <div className='right'>
                    {activepage === 'accountsettings' && <AccountSettings user={user} fetchUserData={fetchUserData} />}
                    {activepage === 'changepassword' && <ChangePassword />}
                    {activepage === 'yourbooks' && <YourBooks />}
                    {activepage === 'premium' && <Premium />}
                    {activepage === 'legalnotice' && <LegalNotice />}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
