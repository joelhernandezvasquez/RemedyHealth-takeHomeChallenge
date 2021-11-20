import Head from 'next/head'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Message from '../components/Message';
import { createPost } from './api/main';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const[name,setName] = useState("");
  const [message,setMessage] = useState("");
 const [emptyFields,setEmptyFields] = useState(false);
 const [isPostSavedMessage,setPostSaved] = useState(false);

  const validateInputFields = () =>{
    if(!name){
      return false;
    }
    if(!message){
      return false;
    }
    return true;
  } 

  const submitForm = async (e) =>{
    e.preventDefault();
    
    if(validateInputFields()){
     setEmptyFields(false);
    
     const result = await createPost({name,message})
     if(result.success){
       setPostSaved(true)
     }
     if(result.error)
     {
       alert(result.data);
     }
    }
     
     
    
    else{
     setEmptyFields(true);
    }
  }

  const clearInputFields = () =>{
    setName("");
    setMessage("");
  }

  useEffect(()=>{
    setTimeout(()=>{
      setPostSaved(false)
      clearInputFields();
      
    },3000)
  },[isPostSavedMessage])
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
        
        {emptyFields? <Message message = {"Please all fields must be filled out"}/>:null}
        {isPostSavedMessage && <Message message = {'Success your post has been saved'}/>}
        
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
