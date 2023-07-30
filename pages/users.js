
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keywords={"users"}>
            <h1>Users list</h1> 
            <ul>
                {users.map(user => 
                <li key={user.id}>
                    <Link href={`/users/${user.id}`} legacyBehavior>
                    <a>{user.name}</a>
                    </Link>
                    
                </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
   
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
   
    return {
      props: {
        users,
      },
    }
  }


//   ----------------------------------(React.js)--------------------------
    // const [users, setUsers] = useState([
    //     { id: 1, name: "Vasya" },
    //     { id: 2, name: "Valera" }
    // ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         setUsers(data) 
    //     };
    //     fetchData();
    // }, [users]);