import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import PhotosUploader from "../PhotosUploader";

const inputStyle = {
    width: "calc(50% - 20px)",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    color: "#333",
    fontSize: "16px",
    marginBottom: "10px",
};

const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

export default function HostedFormPage() {
    const { id } = useParams();
    const [category, setCategory] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [pitchDeck, setPitchDeck] = useState(null);
    const [uploadedPitchDeck, setUploadedPitchDeck] = useState(null);
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [startupName, setStartupName] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/hosted/' + id).then(response => {
            const { data } = response;
            setCategory(data.category);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setTime(data.time);
            setDate(data.date);
            setUploadedPitchDeck(data.pitchDeck);
            setLocation(data.location);
            setStartupName(data.startupName);
        });
    }, [id]);

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function saveEvent(ev) {
        ev.preventDefault();

        const hostedData = {
            category, addedPhotos,
            description, pitchDeck,
            date, location,
            startupName
        }

        const currentIST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        const currentDate = new Date(currentIST).toISOString().slice(0, 10);

        if (date < currentDate) {
            alert('Please select a date in the future.');
            return;
        }

        if (id) {
            await axios.put('/hosted', {
                id,
                ...hostedData
            });
            setRedirect(true);
        } else {
            await axios.post('/account/hosted', hostedData);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/hosted'} />;
    }

    return (
        <div>
            <AccountNav />
            <form onSubmit={saveEvent}>
                {preInput('Category', 'Category for your Event')}
                <input type='text' value={category} onChange={ev => setCategory(ev.target.value)} placeholder='Category, for example: Conference' style={inputStyle} />
                {preInput('Location', 'Location of the event')}
                <input type='text' value={location} onChange={ev => setLocation(ev.target.value)} placeholder='Location, for example: New York' style={inputStyle} />
                {preInput('Name of Startup', 'Name of your Startup')}
                <input type='text' value={startupName} onChange={ev => setStartupName(ev.target.value)} placeholder='Startup Name' style={inputStyle} />
                {preInput('Photos', 'more=better')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                {preInput('Description', 'Description of the event')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} style={{ ...inputStyle, height: "100px", resize: "none" }} />
                {preInput('Pitch Deck', 'Upload the pitch deck for your event')}
                <input type='file' onChange={ev => setPitchDeck(ev.target.files[0])} style={{ marginBottom: "10px" }} />
                {uploadedPitchDeck && (
                    <div>
                        <h3>Uploaded Pitch Deck:</h3>
                        <a href={uploadedPitchDeck} target="_blank" rel="noreferrer" style={{ color: "blue" }}>{uploadedPitchDeck}</a>
                    </div>
                )}
                {preInput('Date', 'Date of the event')}
                <input
                    type="date"
                    value={date}
                    onChange={(ev) => setDate(ev.target.value)}
                    min={new Date().toISOString().slice(0, 10)}
                    style={inputStyle}
                />
                <div>
                    <button className="primary my-4" style={buttonStyle}>Save</button>
                </div>
            </form>
        </div>
    );
}
