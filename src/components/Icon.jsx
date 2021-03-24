import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SavingIcon from '@material-ui/icons/SaveSharp'
// import ContentCopyIcon from '@material-ui/icons/ContentCopyIcon'

import MailIcon from '@material-ui/icons/Mail';

export default function Icon( { name }) {
    let icon = null
    switch(name){
        case 'inbox':
            icon = <InboxIcon/>
            break;
        case 'desktop':
            icon= <DesktopMacIcon />
            break;
        default:
    }

    return icon;
}
