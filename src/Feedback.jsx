import React from 'react'
import {useState} from 'react';




function Feedback(props) {

    const [form, setForm] = useState({
        name: 'БИБА',
        score: 'good',
        agreement: false
    });
    
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type)
        console.log(evt.target)
    }

    const handleChange = ({target}) =>{
        const name = target.name;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        setForm(prevForm=> ({...prevForm, [name]: value}))
    }

    const handleNameChange = evt => {
        setForm(prevForm=> ({...prevForm, name: evt.target.value}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Ваше имя</label>
                    <input id='name' name='name' value={form.name} onChange={handleNameChange}></input>
                </div>
                <div>
                    <label htmlFor='score'>Выберите уровень удовлетворённости</label>
                    <select name="score" id="score" value={form.score} onChange={handleChange}>
                        <option value="good">good</option>
                        <option value="Normal">Normal</option>
                        <option value="bad">Bad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="agreement">
                        <input  name='agreement' id='agreement' type='checkbox'
                        checked={form.agreement} onChange={handleChange}/>
                          Согласен на всё
                       
                    </label>
                    <button type='submit'>Отправить</button>
                    </div>
            </form>
        </div>
        
    )
}



export default Feedback

