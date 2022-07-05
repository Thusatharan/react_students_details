import { useState, useEffect } from "react";
import List from "./List";

const Home = () => {

    const [students, setStudents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/getStudentsList')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    setError('Issue occured, Could not load data')
                }
            })
            .then(data => {
                setStudents(data);
                setIsLoading(false);
            }).catch(err => {

            })
    }, []);



    return (
        <div>
            {isLoading && <div className="loading">Loading</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {students && <List data={students} user="Admin" />}
        </div>
    );
}

export default Home;