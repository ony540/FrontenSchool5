import React from "react";
import "./EventForm.css";
import { useState } from "react";

function EventForm({ addData }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [food, setFood] = useState("짜장면");

    // 제출하기
    function submitForm(e) {
        e.preventDefault();
        if (title !== "" && date !== "") {
            const formData = {
                id: Math.floor(Math.random() * 1000),
                title,
                date,
                food
            };
            addData(formData);
            resetForm();
        } else {
            alert("모든 항목을 채워주세요!");
        }
    }

    // 리셋하기
    function resetForm() {
        setTitle("");
        setDate("");
        setFood("");
    }

    return (
        <form className="event-form" onSubmit={submitForm}>
            <label htmlFor="">
                <strong>Event Title : </strong>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label htmlFor="">
                <strong>Event date : </strong>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label htmlFor="">
                <select onChange={(e)=> {setFood(e.target.value)}}>
                    <option value="짜장면">짜장면</option>
                    <option value="유산슬">유산슬</option>
                    <option value="탕수육">탕수육</option>
                </select>
            </label>

            <button type="submit">제출하기</button>
            <button type="reset" onClick={resetForm}>
                초기화
            </button>
        </form>
    );
}

export default EventForm;
