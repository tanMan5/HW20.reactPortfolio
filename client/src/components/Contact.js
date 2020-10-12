import React, { Component } from "react";
import { Grid, Cell, List, Listitem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <h2>Hello, my name is Tanner Nielsen!</h2>
                        <img src={require("../../public/assets/Nielsen.jpeg")}
                            alt="Tanner Nielsen"
                            style={{ height: '200px' }} />
                    </Cell>
                    <Cell col={4}>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '125px' }}> Front-end web developer with newly developed skills in HTML, CSS, JavaScript, and responsive web design. I recently earned a Certificate in Full Stack Web Development through the University of Arizona. I am a creative, confident, self-motivated person who is also a team player. With each project, I focus on creating an impactful and memorable user experience. I am ecstatic to expand my knowledge and refine my skills as part of joining a quality-driven team to build a better web experience</p></Cell>
                        <Cell col={4}>
                            <h2>Contact me</h2>
                            <hr/>

                    <div className="contact-list">
                    <List>

                        <ListItem>
                        <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            tan-ali5@outlook.com
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (360) 970 8886
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            <a href="https://www.linkedin.com/in/tanernielsen/" rel="noopener noreferrer" target="_blank">
                                Tanner Nielsen's Linkedin Profile
                            </a>
                        </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                            <i className="fa fa-github" aria-hidden="true"/>
                            <a href="https://github.com/tanMan5" rel="noopener noreferrer" target="_blank">
                                Tanner Nielsen's GitHub Profile
                            </a>
                        </ListItemContent>
                        </ListItem>

                    </List>
                    </div>
                    </Cell>
                    </Grid>
               
            </div>
        )
    }
}

export default Contact;