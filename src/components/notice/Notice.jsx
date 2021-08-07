import React, { Component } from 'react'
import classes from './Notice.module.css';

class Notice extends Component {
    render() {
        return (
            <div className={classes.notice} id="notice">
              <p className={classes.noticetext}><u className={classes.bold}>Version 2</u> of this web portfolio is under development. Please check back later </p>
            </div>
        )
    }
}

export default Notice;