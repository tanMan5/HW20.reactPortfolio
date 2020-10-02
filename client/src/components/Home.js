import React, { Component } from 'raect';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(<div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
            <Cell col={12}>
                <img 
                    src={require("./../assets/avatar.png")}
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr/>
                    <p>
                        HTML/CSS | Bootstrap | Javascript/jQuery | React | NodeJS | Express | SQL | Firebase
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/tanner-nielsen-224a60149/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        <a href="https://github.com/tanMan5" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"/>
                        </a>
                        <a href={resume} rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-file-text" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
)
}
}

export default Home;