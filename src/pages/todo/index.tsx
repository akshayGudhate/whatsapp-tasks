import React, { useState } from "react";


const TodoPage = () => {
    // state
    const [enteredText, setEnteredText] = useState('');

    // handlers
    const titleChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredText(event.target.value);
    };

    // 
    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // save todo object
        console.log(enteredText);

        // clear previous data
        setEnteredText('');
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Add Todo Here</label>
            <br /><br />
            <textarea value={enteredText} rows={10} cols={100} onChange={titleChangeHandler} />
            <br /><br />
            <button>Submit</button>
        </form>
    );
};



export default TodoPage;