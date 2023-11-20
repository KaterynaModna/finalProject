import { useForm, SubmitHandler } from "react-hook-form"
export default function FormFooter(UserObject) {
    



    return (
<section className="form_section">
<div className="section_main_text_wrapper">
    <h3 className="section_name">Fill Out the Form</h3>
    <span className="section_little_text">Write a brief description of your needs and receive a detailed
        consultation from us.</span>
</div>
<div className="form_wrapper">
    <form>
    <input className="form_input" type="text" id="name" name="name" placeholder="First name" />
    <input className="form_input" type="tel" id="number" name="number" placeholder="+ 38 (_ _ _) _ _ _   _ _   _ _" />
    <input className="form_input" type="email" id="email" name="email" placeholder="yourmail@gmail.com" />
        <button className="form_button" type="button">Book Consultation</button>
    </form>
</div>
</section>
)
}