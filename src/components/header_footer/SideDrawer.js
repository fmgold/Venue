import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {

    const scrollToElement = (elements) =>{
        scroller.scrollTo(elements, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
        props.onClose(false)
    }

    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Featured')}>
                    Event starts here
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('VenueNfo')}>
                    Venue Info
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('Highlights')}>
                    Highlight
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>console.log('Location')}>
                    Location
                </ListItem>

            </List>
        </Drawer>
    )
}
export default SideDrawer;