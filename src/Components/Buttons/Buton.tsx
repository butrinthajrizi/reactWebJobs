import './Button.css'

type Props = {
  children: string;
  variant?: "signIn" | "signUp" | "logIn" | "delete";
};

export default function Button({ children, variant, ...rest }: Props) {
    let style: any = {
      // colour: "black", 
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      margin: "0.5rem",
      cursor: "pointer"
    };
  
    if (variant === "signIn") {
      style.backgroundColor = "rgb(83, 189, 83)";
  
      
    }
  
    if (variant === "signUp") {
      style.backgroundColor = "#6c757d";
      style.paddingBottom = "0.7rem";
      style.paddingTop = "0.7rem";
      
    }

    if (variant === "logIn") {
      style.colour = "rgb(104, 85, 224)";
      style.backgroundColor = "rgba(255, 255, 255, 1)";
      style.border = "1px solid rgba(104, 85, 224, 1)"
    }

    if (variant === "delete") {
      style.colour = "white";
      style.backgroundColor = "red";
      style.border = "1px solid red"
    }

    return (
        <button className='button' style={style} {...rest}>
        {children}
      </button>);
    }