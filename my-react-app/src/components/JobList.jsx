import React from "react";
import "../components/JobList.css";

const jobs = [
  {
    title: "Staff Dapur - Rumah Makan Asli Jawa, Solo",
    gender: "Laki-laki",
    maxAge: 35,
    status: "Buka",
    date: "12 September 2023 - 30 September 2023",
    location: "Solo, Jawa Tengah",
    salary: "Rp 2.5 - 3.5 juta/bulan"
  },
  {
    title: "Chef De Partie - Hotel Bintang 5, Jakarta",
    gender: "Laki-laki/Perempuan",
    maxAge: 40,
    status: "Buka",
    date: "20 September 2023 - 20 Oktober 2023",
    location: "Jakarta Pusat",
    salary: "Rp 5 - 7 juta/bulan"
  },
  {
    title: "Pastry Chef - Artisan Bakery, Bandung",
    gender: "Laki-laki/Perempuan",
    maxAge: 35,
    status: "Buka",
    date: "15 September 2023 - 15 Oktober 2023",
    location: "Bandung, Jawa Barat",
    salary: "Rp 4 - 6 juta/bulan"
  }
];

const JobList = () => (
  <section className="job-list">
    <h2>Lowongan Kerja</h2>
    <div className="job-cards">
      {jobs.map((job, idx) => (
        <div className="job-card" key={idx}>
          <div className="job-info">
            <div className="job-header">
              <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
              <span className="requirements">{job.gender}, Maks. {job.maxAge} tahun</span>
            </div>
            <h3 className="job-title">{job.title}</h3>
            <div className="job-details">
              <div className="location">📍 {job.location}</div>
              <div className="salary">💰 {job.salary}</div>
              <div className="date">📅 {job.date}</div>
            </div>
          </div>
          <button className="detail-btn">Lihat Detail</button>
        </div>
      ))}
    </div>
    <button className="lihat-lainnya">Lihat Lainnya</button>
  </section>
);

export default JobList;