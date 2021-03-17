import React from 'react'


function Feedback(props) {
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type)
        console.log(evt.target)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'></label>
                    <input id='name' name='name'></input>
                </div>
                <div>
                    <label htmlFor='satisfaction'></label>
                    <select name="satisfaction" id="satisfaction">
                        <option value="good">Хорошо</option>
                        <option value="bad">Плохо</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="agreement">
                        <input type="checkbox" name='agreement' id='agreement'/>
                          Согласен на всё
                    </label>
                    <button type='submit'>Отправить</button>
                    </div>
            </form>
        </div>
        
    )
}



export default Feedback

