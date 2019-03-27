import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js useEffect');
        // setTimeout(() => {
        //     alert('Timeout');
        // }, 1000);
    },[props.personsLength]);

    const styleClasses = [];
    let btnStyle = '';

    if (props.showContent) {
        btnStyle = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      styleClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      styleClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={styleClasses.join(' ')}>Guest List</p>
            <button
                className={btnStyle}
                onClick={props.clicked}>Toggle Names</button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>           
        </div>
    );
}

export default React.memo(cockpit);