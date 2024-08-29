import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Form = ({ int, label, state, setState, filterer, dataArray, selected, setSelected, errors, setErrors }) => {

    const [searchText, setSearchText] = useState('')
    const inputStyle = "input input-bordered  text-[#0d3454] w-full   focus:border-2 focus:outline-0 focus:border-purple-400 focus:placeholder:pl-2 transition-all duration-100"

    const Field = () => {
        return (<div className="label">
            <span className="label-text text-red-500">This field is required</span>
        </div>)
    }

    const Label = ({ text, ind }) => {
        return (
            <div className="label mb-2">
                <span className={` px-2 py-2 my-2 ${errors.includes(parseInt(ind)) ? "label-text text-red-500 " : selected == parseInt(ind) ? "label-text text-purple-500  " : "label-text text-black-500  "}`}>{text}</span>
            </div>)
    }

    return (
        <div className={` w-full relative    py-2`}>
            <Label ind={int} text={label} />
            <div className={`flex px-2 justify-center items-center  z-0 border-2 rounded-xl gap-5 ${`${errors?.includes(int) ? ' border-red-500 focus:border-red-500' : selected == int ? 'border-purple-500' : 'border-gray-400'} ${inputStyle}`}`}>
                <input value={searchText && state ? state : searchText || state} onFocus={() => setSelected(int)} className={`   p-2 rounded-lg w-full outline-none`}
                    onChange={(e) => {
                        setState(e.target.value)
                        setSearchText(e.target.value)
                        setErrors((prevItems) => prevItems.filter(item => item !== int))
                    }} type="text" />
                <p onClick={() => setSelected(int)} className="z-0  cursor-pointer justify-end flex"><FaAngleDown /></p>
            </div>
            {errors.includes(int) ? <Field /> : <></>}
            <div className={`absolute w-full bg-white shadow-lg p-5 flex flex-col text-start z-10  ${selected == int ? 'flex' : 'hidden'}`}>
                {filterer ?
                    <div>
                        {selected === int &&
                            filterer.filter(country => country.toLowerCase().includes(searchText.toLowerCase())) 
                                .map(country => (
                                    <option
                                        onClick={() => {
                                            setState(country);
                                            setSelected(0);
                                            setErrors(prevItems => prevItems.filter(item => item !== int));
                                        }}
                                        className="hover:bg-gray-300 rounded-lg p-1 px-2 cursor-pointer"
                                        key={country}
                                    >
                                        {country}
                                    </option>
                                ))
                        }
                    </div> :
                    <div>
                        {selected === int &&
                            dataArray.map((country) =>
                                <option onClick={() => {
                                    setState(country)
                                    setSelected(0)
                                    setErrors((prevItems) => prevItems.filter(item => item !== int))
                                }} className="hover:bg-gray-300 rounded-lg p-1 px-2 cursor-pointer" key={country}  > {country} </option>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Form;