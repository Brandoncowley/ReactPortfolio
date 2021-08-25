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
    </div>
     );
}
 
export default Contact;