import { Box } from '@mui/material'
import React,{useRef} from 'react'
import styles from './ContactUs.module.css'
import emailjs from '@emailjs/browser'


const ContactUs = () => {

    const form = useRef();

    const handleSubmitChange = (e) => {
        e.preventDefault();

         emailjs.sendForm('service_yi41sns', 'template_aib2n9o', form.current, 'XyWVnZLhO5JecMXUM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        alert("Successful");
        
    }

  return (
      <Box className={styles.container_main}>
          
        <div className={styles.container}>
            <div className={styles.contact_box}>
                <div className={styles.contact_left}>
                    <h3>Report your Problem</h3>
                    <form ref={form} onSubmit={handleSubmitChange}>
                        <div className={styles.contact_row}>
                            <div className={styles.contact_group}>
                                <label className={styles.label}>Name</label>
                                <input className={styles.input} type="text" placeholder="Your Name" name="name" />
                            </div>
                            <div className={styles.contact_group}>
                                <label  className={styles.label}>Phone</label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Your Phone No."
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className={styles.contact_row}>
                            <div className={styles.contact_group}>
                                <label  className={styles.label}>Email</label>
                                <input className={styles.input} type="email" placeholder="Your email" name="email" />
                            </div>
                            <div className={styles.contact_group}>
                                <label  className={styles.label}>Subject</label>
                                <input
                                    type="text"
                                    placeholder="Please write Subject here"
                                    name="subject"
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <label  className={styles.label}>Message</label>
                        <textarea className={styles.textarea} rows="5" name="message" placeholder="your message..."></textarea>

                        <button className={styles.btn} type="submit">Send</button>
                    </form>
                </div>
                <div className={styles.contact_right}>
                    <h3>Reach Us</h3>
                    <table>
                    <tr>
                        <td className={styles.table_data}>Email</td>
                        <td className={styles.table_data}>contact@example.com</td>
                    </tr>
                    <tr>
                        <td className={styles.table_data}>Phone</td>
                        <td className={styles.table_data}>+1 5544 666</td>
                    </tr>
                    <tr>
                        <td className={styles.table_data}>Adress</td>
                        <td className={styles.table_data}>Sylhet, Bangladesh</td>
                    </tr>
                    </table>
                </div>
            </div>
         </div>
          
    </Box>
  )
}

export default ContactUs