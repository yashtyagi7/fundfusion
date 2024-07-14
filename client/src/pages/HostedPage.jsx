import '../App.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import BookingWidget from "../BookingWidget";
import HostGallery from "../HostGallery";
import VenueLink from "../VenueLink";

export default function HostedPage() {
    const { id } = useParams();
    const [host, setHost] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/hosted/${id}`).then(response => {
            setHost(response.data);
            console.log('Host Data:', response.data);
        });
    }, [id]);

    if (!host) {
        return '';
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-4">
            <h1 className="text-3xl mb-4">{host.title}</h1>
            <VenueLink>{host.venue}</VenueLink>
            <p><strong>Location:</strong> {host.location}</p>
            <p><strong>Startup Name:</strong> {host.startupName}</p>
            <HostGallery host={host} />
            <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="text-gray-300">
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {host.description}
                    </div>
                </div>
                <div>
                    <BookingWidget host={host} />
                </div>
            </div>
        </div>
    );
}
