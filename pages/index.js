import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { createPost } from './api/main';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const[name,setName] = useState("");
  const [message,setMessage] = useState("");
 const [emptyFields,setEmptyFields] = useState(false);

  const validateInputFields = () =>{
    if(!name){
      return false;
    }
    if(!message){
      return false;
    }
    return true;
  } 

  const submitForm =(e) =>{
    e.preventDefault();
    if(validateInputFields()){
     setEmptyFields(false);
     createPost({name,message})
    }
    else{
     setEmptyFields(true);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" />
      </Head>
      
      <h1 className={styles.main_title}> Welcome To Remedy Take Home Challenge</h1>
       <Link href = "/Feed"> See All Posts </Link>
     
      <form className={styles.main_form}>
       <h2 className={styles.form_title}>Send Us a Message</h2>
        {emptyFields? <ErrorMessage message = {"Please all fields must be filled out"}/>:null}
        <div className={styles.input_container}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value ={name} onChange = {(e)=> setName(e.target.value)}/>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">Message</label>
          <input id={styles.input_message} type="text" name="name" value ={message} onChange = {(e)=> setMessage(e.target.value)}/>
        </div>
       
       <button className={styles.btn_submit} type ="submit" onClick = {(e) => submitForm(e)}> Submit Form</button>
      </form>
     
      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
