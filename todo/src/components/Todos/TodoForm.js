import { useState } from 'react'
function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    function onSubmitHandler(event) {
        event.preventDefault();
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input className='btnInp' placeholder='Enter new todo'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button className='btnSubmit' type='submit'>ADD</button>
        </form>
    );
}

export default TodoForm