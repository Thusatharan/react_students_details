import { useState } from "react";
import List from "./List";

const Home = () => {

    const [students, setStudents] = useState(
        [
            { id: 1, name: 'John', age: 26, department: 'CIS', gpa: 2.4 },
            { id: 2, name: 'Sara', age: 24, department: 'CIS', gpa: 5 },
            { id: 3, name: 'Alex', age: 25, department: 'CIS', gpa: 3.25 },
            { id: 4, name: 'Selena', age: 25, department: 'CIS', gpa: 2.0 },
        ]
    );

    return (
        <List data={students} user="Admin" />
    );
}

export default Home;