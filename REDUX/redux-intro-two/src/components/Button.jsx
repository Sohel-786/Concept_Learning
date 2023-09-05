function Button({ text, className, onClick }) {
  return (
    <button
      className={
        className
          ? className
          : "px-3 py-2 font-mono text-gray-700 text-3xl hover:bg-gray-600 m-6 hover:text-white hover:border-2 hover:border-white hover:shadow-lg hover:shadow-cyan-900"
      }

      onClick={ onClick ? onClick : null}
    >
      {text}
    </button>
  );
}

export default Button;
