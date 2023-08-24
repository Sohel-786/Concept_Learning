import './form.css';

function Form({children, onSubmit, title}){
    return (
        <form onSubmit={onSubmit}>
            <h1>{title}</h1>
            {children}
        </form>
    )
}

export default Form;