import { useFormik } from 'formik'
import style from './Style.css'

export default function Form() {

  const formik=useFormik({

    initialValues : {

        name:"",
        email:"",
        password:""


    },

    onSubmit:(values,{resetForm})=>{

        console.log(values)
        resetForm({values:""})


    }



  })



  return (
    <div>

        <h1>Regtration Form</h1>

        <form action="" onSubmit={formik.handleSubmit}>

            <div className='textDiv'>

                <label>Name</label>
                <input type="text" onChange={formik.handleChange} name="name" value={formik.values.name}/>

                <label>Email</label>
                <input type="text"  onChange={formik.handleChange} name="email" value={formik.values.email}/>
              


            </div>

                <label>Password</label>
                <input type="password"  onChange={formik.handleChange} name="password" value={formik.values.password}/>
              
              <br/>
              
            <input type="submit"/>



        </form>

      
    </div>
  )
}
