
import './App.css'
import Person from '../components/Person.jsx';


const persons=[
  {
    name:"Ujjwal Dhungel",
    age:"23",
    gender:"male",
    location:"Kausaltar",
    githubLink:"https://github.com/dhungel123/",
    imgUrl:"https://th.bing.com/th/id/OIP.88hQwxL9ILYl7PV_HXgWqgHaE8?pid=ImgDet&rs=1"
  },
  {
    name:"Prajwal Dhungel",
    age:26,
    gender:"male",
    location:"sydney",
    githubLink:"https://github.com",
    imgUrl:"https://th.bing.com/th/id/OIP.Nu6BCEfAkiWV4DcNaCLsAwHaLy?pid=ImgDet&rs=1"

  },
  {
    name:"Pratik Dhungel",
    age:21,
    gender:"male",
    location:"ottawa",
    githubLink:"https://github.com",
      imgUrl:"https://i1.rgstatic.net/ii/profile.image/378711313534978-1467303221355_Q512/Dean-Popovic.jpg"

  },
  {
    name:"Pranish Dhungel",
    age:12,
    gender:"male",
    location:"Kalimati",
    githubLink:"https://github.com",
    imgUrl:"https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg"

  },
  {
    name:"Prabesh",
    age:20,
    gender:"male",
    location:"pulchock",
    githubLink:"https://github.com",
    imgUrl:"https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?pid=ImgDet&rs=1"

  }
];

function App() {
  return (
    <div className='main-div'>
      {persons.map((item,index)=>{
        return <Person{...item} key={index}/>;

      })}

     
    </div>


  );
}

export default App
