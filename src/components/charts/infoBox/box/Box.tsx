import "./Box.css";
import PropTypes from 'prop-types'; // ES6
export function Box({name, value, icon, style}:{name:String, value:String, icon:any, style:any}) {
    return (
        <section className="ctnBox">
            <h3 style={style}><img src={icon.src} alt={icon.alt}/></h3>
            <section>
                <h4>{value}</h4>
                <p>{name}</p>
            </section>
        </section>
    )
}

Box.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired
}