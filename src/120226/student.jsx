import React, { useState, useMemo } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // 🎯 Calculate grade letter
  const getGradeLetter = (avg) => {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
  };

  // ➕ Add student
  const addStudent = () => {
    if (!name || !studentId) return;

    const newStudent = {
      id: Date.now(),
      name,
      studentId,
      grades: {
        math: "",
        science: "",
        english: "",
      },
    };

    setStudents([...students, newStudent]);
    setName("");
    setStudentId("");
  };

  // ❌ Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // ✏ Update grades
  const updateGrade = (id, subject, value) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? {
              ...s,
              grades: {
                ...s.grades,
                [subject]: value,
              },
            }
          : s
      )
    );
  };

  // 🧮 Calculate average
  const calculateAverage = (grades) => {
    const values = Object.values(grades).map(Number).filter((v) => !isNaN(v));
    if (values.length === 0) return 0;
    return (
      values.reduce((sum, v) => sum + v, 0) / values.length
    ).toFixed(2);
  };

  // 🔍 Filter + Sort
  const filteredStudents = useMemo(() => {
    let result = students.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return result;
  }, [students, search, sortOrder]);

  // 📊 Statistics
  const stats = useMemo(() => {
    if (students.length === 0)
      return {
        classAvg: 0,
        highest: 0,
        lowest: 0,
        gradeCount: { A: 0, B: 0, C: 0, D: 0, F: 0 },
      };

    const averages = students.map((s) =>
      Number(calculateAverage(s.grades))
    );

    const classAvg =
      averages.reduce((sum, v) => sum + v, 0) / averages.length;

    const highest = Math.max(...averages);
    const lowest = Math.min(...averages);

    const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };

    averages.forEach((avg) => {
      const letter = getGradeLetter(avg);
      gradeCount[letter]++;
    });

    return { classAvg, highest, lowest, gradeCount };
  }, [students]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🎓 Student Grade Management System</h2>

      {/* Add Student */}
      <h3>Add Student</h3>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      {/* Filter & Sort */}
      <h3>Search & Sort</h3>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>

      {/* Student List */}
      <h3>Student List</h3>

      {filteredStudents.map((student) => {
        const avg = calculateAverage(student.grades);
        const gradeLetter = getGradeLetter(avg);

        return (
          <div
            key={student.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <strong>{student.name}</strong> (ID: {student.studentId})
            <br />
            Average: {avg} | Grade: {gradeLetter}
            <br />

            Math:
            <input
              type="number"
              value={student.grades.math}
              onChange={(e) =>
                updateGrade(student.id, "math", e.target.value)
              }
            />

            Science:
            <input
              type="number"
              value={student.grades.science}
              onChange={(e) =>
                updateGrade(student.id, "science", e.target.value)
              }
            />

            English:
            <input
              type="number"
              value={student.grades.english}
              onChange={(e) =>
                updateGrade(student.id, "english", e.target.value)
              }
            />

            <br />
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        );
      })}

      {/* Statistics */}
      <h3>📊 Class Statistics</h3>
      <p>Class Average: {stats.classAvg.toFixed(2)}</p>
      <p>Highest Average: {stats.highest}</p>
      <p>Lowest Average: {stats.lowest}</p>

      <h4>Grade Distribution:</h4>
      <p>A: {stats.gradeCount.A}</p>
      <p>B: {stats.gradeCount.B}</p>
      <p>C: {stats.gradeCount.C}</p>
      <p>D: {stats.gradeCount.D}</p>
      <p>F: {stats.gradeCount.F}</p>
    </div>
  );
}
