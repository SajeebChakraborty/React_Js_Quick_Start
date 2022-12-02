const todoTitle="JSX --> javascript code in html";
const date=new Date();

const year=date.getFullYear();

function Card()
{

    return  <div className='card'>

        <h1 className='cardTitle'>

        Ticket

        </h1>

        <p className='cardBody'>

        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.

        </p>



        </div>;



}

export default Card;