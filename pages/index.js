import Head from 'next/head'
import Image from 'next/image'
import { Formik, Form } from 'formik'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as Yup from 'yup'
import Header from '../components/Header'
import Textfield from '../components/FormsUI/Textfield'

// import styles from '../styles/Home.module.css'



const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  }
}))

const INITIAL_FORM_STATE= {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email')
    .required('Required'),
  phone: Yup.number()
    .typeError('Please enter a valid phone number')
    .required()
})

export default function Home() {
  const classes = useStyles()


  return (
    <Grid container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{...INITIAL_FORM_STATE}}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              console.log(values)
            }}
          >
            <Form>
              <Grid container spacinf={2}>
                <Grid item xs={12}>
                  <Typography>
                    Your details
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Textfield 
                    name="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Textfield
                    name="lasttName"  
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Booking Information
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Grid>
    </Grid>
  )
}
