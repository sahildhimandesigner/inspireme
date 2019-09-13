import React from 'react'
import { Formik } from 'formik'
import withStyle from 'react-jss'
import { formStyle } from './AddQuote.style'

const AddQuote = ({ classes}) => {    
    return(
        <div className={classes.formContainer}>
        <h1>Add Your Quotes</h1>
        <Formik
          initialValues={{ author: '', quote: '' }}
          validate={values => {
            let errors = {};
            if (!values.author) {
              errors.author = 'Required';
            } 
            if (!values.quote) {
                errors.quote = 'Required';
              } 
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {              
            let formdata = [{author: values.author, quote: values.quote}];
            localStorage.setItem('formdata', JSON.stringify(formdata));
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.inputBox}>
                <label className={classes.inputLable}>Author Name</label>   
                <input className={classes.inputContainer}
                    type="text"
                    name="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                />
                <span className={classes.errorContainer}>{errors.author && touched.author && errors.author}</span>
              </div>    

              <div className={classes.inputBox}>
                <label className={classes.inputLable}>Add Quote</label>
                <textarea className={classes.textContainer} cols='15' row='100'                
                    name="quote"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quote}
                />
                <span className={classes.errorContainer}>{errors.quote && touched.quote && errors.quote}</span>
              </div>
              <button type="submit" disabled={isSubmitting} className={classes.submitButton}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    )
}

export default withStyle(formStyle)(AddQuote);