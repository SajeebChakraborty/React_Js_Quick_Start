const todoTitle="JSX --> javascript code in html";
const date=new Date();

const year=date.getFullYear();

function Card(props)
{

    //destructuring

    const {titleText,descText}=props;

    return  <div className='card'>

        <h1 className='cardTitle'>

            { titleText }

        </h1>

        <p className='cardBody'>


            { descText }

        </p>



        </div>;



}

export default Card;