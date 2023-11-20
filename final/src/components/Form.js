import { useForm } from "react-hook-form";

export default function UserForm({ UserObject={} }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {...userObj}
    });

    const onSubmitHandler = (data) => {
        console.log(data);
    }

return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    <div className="form_wrapper">
        <input {...register("user_name")} className="form_input" value={user_name} type="text" id="user_name" placeholder="First name" required/>
        <input {...register("user_phone")} className="form_input" value={user_phone}  type="tel" id="user_phone" placeholder="+ 38 (_ _ _) _ _ _   _ _   _ _" required/>
        <input {...register("user_email")} className="form_input" value={user_email}  type="email" id="user_email" placeholder="yourmail@gmail.com" required/>
            <button className="form_button" type="button">Book Consultation</button>
            </div>
        </form>
    )
    }