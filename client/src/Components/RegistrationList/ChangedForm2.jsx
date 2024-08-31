
const ChangedForm2 = ({ int, label, state, setState, placeholder, selected, setSelected, errors, setErrors,type, value, changedValue }) => {

    const Field = () => {
        return (<div className="label">
            <span className="label-text text-red-500">This field is required</span>
        </div>)
    }

    const Label = ({ text, ind }) => {
        return (<div className="label">
            <span className={errors.includes(parseInt(ind)) ? "label-text text-red-500" : selected == parseInt(ind) ? "label-text text-purple-500" : "label-text text-black-500"}>{text}</span>
        </div>)
    }
    const addError = (e) => {
        setErrors(prevErrors => [...prevErrors, e]);
    }
    return (
        <div className={`    form-control w-full`}>
            <Label ind={int} text={label} />
            <div className={`border-2 rounded-lg   ${errors?.includes(int) ? ' border-red-500 focus:border-red-500' : selected == int ? 'border-purple-500' : 'border-gray-400'}`}>
                <input onFocus={() => setSelected(int)} onBlur={() => {
                    setSelected(0)
                    !state.trim() && addError(int)
                }} onChange={e => {
                    setSelected(int)
                    setErrors((prevItems) => prevItems.filter(item => item !== int))
                    setState(e.target.value)
                }} value={changedValue? changedValue: value && value } type={type} placeholder={placeholder} className={`p-2 outline-none  rounded-lg w-full  `} />
            </div>
            {errors.includes(int) ? <Field /> : <></>}
        </div>
    );
};

export default ChangedForm2;