import "./CompanyName.css";

function CompanyName(props){
    return(
        <div>
            <h2 className="name">{props.Name}</h2>
        </div>
    );
}

export default CompanyName;