
import Question_1 from "./Question_1";
import Question_2 from "./Question_2";
import Question_3 from "./Question_3";
import Question_4 from "./Question_4";
import Question_5 from "./Question_5";



export default function FAQ(){


    return(
    <section className="faq">
    <div className="section_main_text_wrapper">
        <h3 className="section_name">FAQ</h3>
        <span className="section_little_text">Find quick answers to common travel-related questions. Explore our
            FAQs to get the information
            you need for a seamless travel experience.</span>
    </div>
    <div className="questions">
        <Question_1 />
        <Question_2 />
        <Question_3 />
        <Question_4 />
        <Question_5 />
    </div>
</section>
    )
}