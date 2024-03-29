import React from 'react';
import { Formik, Form } from 'formik';

import s from './RegistrationForm.module.css'

export const RegistrationForm = () => {
    return(
        <div className={s.container}>
        <h2 className={s.title}>REGISTER </h2>
        <div>
        <Formik
        initialValues={{
            name:'',
          email: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
      console.log(values)
       
        }}
        // validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
  
        }) => (
          <Form onSubmit={handleSubmit}>
           
           <div className={s.inputBlock}>
                <span className={s.placeTitle}>Name *</span>
            <input
              className={s.inputForm}
              type="name"
              name="name"
              
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter name...'}
              defaultValue={values.name}
            />
         {errors.name && touched.name && errors.name && (
              <div className={s.errorText}>{errors.name}</div>
            )}
        </div>
            <div className={s.inputBlock}>
                <span className={s.placeTitle}>Email *</span>
            <input
              className={s.inputForm}
              type="email"
              name="email"
              
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter email...'}
              defaultValue={values.email}
            />
         {errors.email && touched.email && errors.email && (
              <div className={s.errorText}>{errors.email}</div>
            )}
        </div>
        <div className={s.inputBlock}>
        <span className={s.placeTitle}>Password *</span>
            <input
              className={s.inputForm}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Enter password...'}
              defaultValue={values.password}
            />
            {errors.password && touched.password && errors.password && (
              <div className={s.errorText}>{errors.password}</div>
            )}
            </div>
            <button
              className= {`${s.btnFirst} ${s.btn}` }
              type="submit"
                disabled={
                  !values.email ||
                  !values.password ||
                  !values.name
                }
            >
             Register 
            </button>
            <button
            className={`${s.btnSecond} ${s.btn}` }
              type="button"
            >
             Login  
            </button>
      </Form>
        )}
      </Formik>
        </div>
        </div>
    )
}