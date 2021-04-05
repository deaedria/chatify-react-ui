import React, {useState} from 'react'

const InputField = ({className, type, id, name, label, img, alt}) => {
    const [inputValue, setInputValue] = useState('')

    const changeHandler = (e) => {
        setInputValue(e.target.value)
    }
    console.log(setInputValue)

    return (
        <div className={className}>
            <input type={type} value={inputValue} id={id} name={name} onChange={changeHandler} required />
            {img !== undefined ? <img src={img} alt={alt} /> : "" }
            <label htmlFor="input-field">{label}</label>
        </div>
    )
}

export default InputField


// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: ""
//         };
//         this.changeHandler = this.changeHandler.bind(this)
//     }

//     changeHandler(e){
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
// }




