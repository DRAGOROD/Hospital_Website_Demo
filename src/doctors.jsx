import DocBg from './assets/db.mp4'

function Doctors(){

const doctors = [
  {
    id: 1,
    name: "Dr. James Anderson",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    specialization: "Cardiologist",
    experience: 18
  },
  {
    id: 2,
    name: "Dr. Sophia Williams",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    specialization: "Neurologist",
    experience: 14
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    picture: "https://randomuser.me/api/portraits/men/46.jpg",
    specialization: "Orthopedic Surgeon",
    experience: 21
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    specialization: "Pediatrician",
    experience: 12
  },
  {
    id: 5,
    name: "Dr. Daniel Wilson",
    picture: "https://randomuser.me/api/portraits/men/75.jpg",
    specialization: "Dermatologist",
    experience: 16
  },
  {
    id: 6,
    name: "Dr. Olivia Martinez",
    picture: "https://randomuser.me/api/portraits/women/26.jpg",
    specialization: "Gynecologist",
    experience: 11
  },
  {
    id: 7,
    name: "Dr. William Taylor",
    picture: "https://randomuser.me/api/portraits/men/52.jpg",
    specialization: "Oncologist",
    experience: 23
  },
  {
    id: 8,
    name: "Dr. Isabella Thomas",
    picture: "https://randomuser.me/api/portraits/women/57.jpg",
    specialization: "Ophthalmologist",
    experience: 9
  },
  {
    id: 9,
    name: "Dr. Benjamin Moore",
    picture: "https://randomuser.me/api/portraits/men/68.jpg",
    specialization: "Gastroenterologist",
    experience: 19
  },
  {
    id: 10,
    name: "Dr. Charlotte Garcia",
    picture: "https://randomuser.me/api/portraits/women/90.jpg",
    specialization: "Psychiatrist",
    experience: 15
  }
];

  return (
    <div id='doctors-container'>
      <h3>Our Specalists</h3>
      <video src={DocBg} autoPlay loop/> 
      <div id="crousal-container">
        <div id="crousal-stage">
        {doctors.map((v,i)=>
        <div className='doctor-cards' key={i} style={{transform:`rotateY(${i * (360 / doctors.length)}deg) translateZ(var(--crousal-dept))`}}>
           <img src={v.picture} alt={v.name}/>
           <p>{v.specialization}</p>
           <p>{v.name}</p>
           <p>{v.experience} Years</p>
           <span>Book Appoiniment</span>
        </div>)}
        </div>
      </div>
    </div>
  )
}

export default Doctors;