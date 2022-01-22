import "./button.less";

const Button = ({children, ...props}) => {
    return (
        <button id="btn" {...props}>
            {children}
        </button>
    );
};

export default Button