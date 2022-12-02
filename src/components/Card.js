const todoTitle="JSX --> javascript code in html";
const date=new Date();

const year=date.getFullYear();

function Card(props)
{

    return  <div className='card'>

        <h1 className='cardTitle'>

            { props.titleText }

        </h1>

        <p className='cardBody'>


            { props.descText }

        </p>



        </div>;



}

export default Card;