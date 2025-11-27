
import './styles.css';

const StaffCard = (props) => {
    return(
        <div className="staff-card-container">
            <img src={props.staffImg} alt="" className='img-container'/>
            <p className='name-staff'>{props.staffName}</p>
            <p className='name-staff-subtitle'>{props.staffPosition}</p>
        </div>
    )
};

export default StaffCard;