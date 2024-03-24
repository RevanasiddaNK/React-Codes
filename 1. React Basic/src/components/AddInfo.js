import './AddInfo.css';

function AddInfo(Props){
    return(
        <div className='otherInfo'>
            <h3>Industry : {Props.industry}</h3>
            <p>founded : {Props.year}</p>
            <p>founder : {Props.founder}</p>
        </div>
    );
}

export default AddInfo;