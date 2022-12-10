import { useFormik } from 'formik'
import * as yup from 'yup';
import style from './Style.css'

export default function Form() {

  const formik=useFormik({

    initialValues : {

        name:"",
        email:"",
        password:""


    },
    validationSchema:yup.object().shape({
        name: yup.string().min(2,"name atleast 2 character").required(),
        email: yup.string().min(2,"email atleast 2 character").required(),
        password: yup.string().min(2,"password atleast 2 character").required(),

       
      }),

    onSubmit:(values,{resetForm})=>{

        console.log(values)
        resetForm({values:""})


    }



  })

  console.error(formik.errors)



  return (
    <div>

        <h1>Regtration Form</h1>

        <form action="" onSubmit={formik.handleSubmit}>

            <div className='textDiv'>

                <label>Name</label>
                <input type="text" onChange={formik.handleChange} name="name" value={formik.values.name}/>

                {

                   formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>


                }


                <label>Email</label>
                <input type="text"  onChange={formik.handleChange} name="email" value={formik.values.email}/>
              
                {

                    formik.touched.email &&  formik.errors.email && <span>{formik.errors.email}</span>


                }



            </div>

                <label>Password</label>
                <input type="password"  onChange={formik.handleChange} name="password" value={formik.values.password}/>
                
                {

                    formik.touched.password &&    formik.errors.password && <span>{formik.errors.password}</span>


                }




              <br/>
              
            <input type="submit"/>



        </form>

      
    </div>
  )
}
