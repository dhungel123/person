import './Card.css'
const Person = (props) => {

    const { name, age, imgUrl, githubLink, gender, location } = props;

    console.log(props);

    return (
        <div style={
            {
                border: "1px solid black",
                padding: "1rem",
                minWidth: 300,
                borderRadius: "10px",
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',


            }}
        >
            <img
                style={{ height: 200, width: 200, objectFit: "cover" }}
                src={imgUrl} />

            <div className="data-box">


                <p className="title">name:</p>
                <p className="value">{name}</p>
            </div>
            <div className="data-box">

                <p className="title">age:</p>
                <p className="value">{age}</p>
            </div>

            <div className="data-box">

                <p className="title">github:</p>
                <p className="value"><a href={githubLink}>click here</a></p>


            </div>

            <div className="data-box">

                <p className='title'>gender:</p>
                <p className='value'>{gender}</p>


            </div>
            <div className="data-box">

                <p className='title'>location:</p>
                <p className='value'>{location}</p>

            </div>

        </div>
    );
}
export default Person


