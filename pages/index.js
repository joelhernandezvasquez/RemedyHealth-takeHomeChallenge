import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import SuccessMessage from '../components/SuccessMessage'
import { createPost } from './api/main'
import styles from '../styles/Home.module.css'

export default function Home () {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [emptyFields, setEmptyFields] = useState(false)
  const [isPostSavedMessage, setPostSaved] = useState(null)

  // Function that return true of false based on if there is/are empty fields.
  const validateInputFields = () => {
    if (!name) {
      return false
    }
    if (!message) {
      return false
    }
    return true
  }

  const submitForm = async e => {
    e.preventDefault()

    if (validateInputFields()) {
      setEmptyFields(false)

      const response = await createPost({ name, message })
      if (response.success) {
        setPostSaved(true)
      }
      if (response.error) {
        alert(response.data)
      }
    } 
    else {
      setEmptyFields(true)
    }
  }

  const clearInputFields = () => {
    setName('')
    setMessage('')
  }

  useEffect(() => {
    if (!isPostSavedMessage) return

    /*This Function once user is able to create the post , It will delete the success message 
     automatically and reset the form inputs */
    setTimeout(() => {
      setPostSaved(false)
      clearInputFields()
    }, 3000)
  }, [isPostSavedMessage])

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>

      <Header />

      <h1 className={styles.main_title}>
       Welcome To <span className={styles.inner_text}> Remedy Health Media</span> Take Home Challenge
      </h1>

      <form className={styles.main_form}>
        <h2 className={styles.form_title}>Send Us a Message</h2>

        {/* if there is any empty fields it will render an error message component. */}
        
        {emptyFields ? (
          <ErrorMessage message={'Please all fields must be filled out'} />
        ) : null}

        {/* Once the user is able to create the post, it will render a success message component */}
        {isPostSavedMessage && (
          <SuccessMessage message={'Success your post has been saved'} />
        )}

        <div className={styles.input_container}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <label htmlFor='message'>Message</label>
          <textarea
            className={styles.input_message}
            type='text'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button
          className={styles.btn_submit}
          type='submit'
          onClick={e => submitForm(e)}
        >
          Submit Form
        </button>
      </form>

      <div className={styles.main_link_container}>
        <Link href='/Feed' className={styles.main_link}>
          Click here to see all Posts
        </Link>
      </div>
    </div>
  )
}
