import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../hooks/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id.slice(1));
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    if (title && details) {
      const editNote = { ...note, title, details, date };

      const updateNote = notes.map((item) => {
        if (item.id === id.slice(1)) {
          item = editNote;
        }
        return item;
      });

      setNotes(updateNote);
    }
    navigate("/");
  };

  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id !== id.slice(1));
    setNotes(newNotes);
    navigate("/");
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleEdit}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};

export default EditNote;
