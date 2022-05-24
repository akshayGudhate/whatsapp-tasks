const TodoPage = () => {
    const handleOnSubmit = () => { };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Add Todo Here</label>
            <input />
            <button>Submit</button>
        </form>
    );
};

export default TodoPage;