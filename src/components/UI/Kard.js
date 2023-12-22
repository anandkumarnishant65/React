import './Kard.css';

function Kard(props){
    const classes='kard ' +props.className;

    return <div className={classes}>{props.children}</div>
}
export default Kard;