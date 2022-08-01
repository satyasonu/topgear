import Header from './Header';
import Details from './Details';
import './App.css'
//Please find Main function component under this students object.
export const students = [
    {
        id : 2022001,
        name : "Satyanarayan",
        marks : 456
    },
    {
        id : 2022002,
        name : "Kashi Bihari",
        marks : 551
    },
    {
        id : 2022003,
        name : "Jagdish Sharma",
        marks : 496
    },
    {
        id : 2022004,
        name : "Jhon Dev",
        marks : 359
    },
    {
        id : 2022005,
        name : "Shree Joshi",
        marks : 479
    }
];


const Main = () => {
  return (
    <div className='main'>
    <Header />
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <Details />
          </tbody>
        </table>
        </div>
  )
}

export default Main