function Button({text, className}){
    return(
        <button className={ className ? className :"px-3 py-2 font-mono text-gray-700 text-3xl hover:bg-gray-600 m-6 hover:text-white hover:border-2 hover:border-white hover:shadow-lg hover:shadow-cyan-900" }>{text}</button>
    )
}

export default Button;

