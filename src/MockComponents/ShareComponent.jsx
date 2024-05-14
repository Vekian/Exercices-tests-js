import React from 'react';
import InstallComponent  from './InstallComponent'
import UserComponent from './UserComponent'

export default function ShareComponent() {
    return (
        <div>
            <InstallComponent para1='title1'/>
            <UserComponent para2='title2' />
        </div>
    )
}