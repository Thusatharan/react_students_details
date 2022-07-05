const List = (props) => {
    const students = props.data;
    // console.log(props.user);
    return (
        <div>
            {
                students.map((student) => (
                    <div className="studentList" key={student.id}>
                        <div>
                            <div className="studentName">{student.name}</div>
                            <div className="studentAge">{student.age}</div>
                            <div className="studentDepartment">{student.department}</div>
                        </div>
                        <div>
                            {student.gpa >= 2.5 ? <div className="eligible">Eligible</div> : <div className="noteligible">Not Eligible</div>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default List;