const Contact = () => {
    return ( 
        <div className="contact">
        <h2>Get in Touch With Me!</h2>
        <form>
            <label>Name:</label>
            <input
                type = "text"
                required
            />
            <label>Email:</label>
            <textarea
                type = "text"
                required
            ></textarea>
            <label>Your Message:</label>
            <textarea
                type = "text"
                required
            ></textarea>
            <button>Send It!</button>        
        </form>
        <h6>Or simply send me an email using the link in the footer below!</h6>
    </div>
     );
}
 
export default Contact;