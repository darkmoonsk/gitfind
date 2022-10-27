import { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import RepositoryItemList from "../../components/RepositoryItemList";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleChangeUser = (event) => setUser(event.target.value);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      setCurrentUser(newUser);  
    }

    const userReposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newUserRepos = await userReposData.json()
    
    if(newUserRepos.length){
      setRepos(newUserRepos);
    }

    // console.log(newUser);
    // console.log(newUserRepos);
  }

  return (
    <div className="app">
      <Header />
      <Content>
        <Info>
          <main>
            <input name="usuario" value={user} onChange={handleChangeUser} placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
            <Profile>
              { currentUser ?
              <>
              <ImgProfile src={currentUser.avatar_url}></ImgProfile>
                <ProfileData>
                <h3>{currentUser?.name}</h3>
                <span>{`@${currentUser?.login}`}</span>
                <p>{currentUser?.bio}</p>
              </ProfileData>
              </>
                :
                <></>
              }
            </Profile>
            { 
            repos && <Repositories>
              <hr />
              <h4>Repositórios</h4>
              { repos.map( repo => (
                <RepositoryItemList 
                title={repo?.name} 
                description={repo?.description} 
                url={repo?.html_url}    
                />
              ))}
              
            </Repositories>
            }
          </main>
        </Info>
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: rgb(36, 36, 36);
  background: radial-gradient(
    circle,
    rgba(36, 36, 36, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 100vh;
  width: 100%;
`;

const Info = styled.div`
  color: white;
  width: 60%;
  margin-right: 90px;
  margin-top: 40px;

  input {
    border: 1px solid #999999;
    border-radius: 22px;
    min-width: 250px;
    width: 80%;
    margin-right: 12px;
    background: transparent;
    font-size: 18px;
    padding: 10px;
    color: white;
  }

  button {
    cursor: pointer;
    border: 1px solid #999999;
    border-radius: 22px;
    margin-right: 12px;
    margin-top: 10px;
    background: #2d333b;
    font-size: 18px;
    padding: 10px;
    color: white;
  }
`;

const Profile = styled.div`
  display: flex;
  margin: 40px 0px;

  h3 {
    color: #e5e5e5;
    font-size: 24px;
    margin: 0;
  }

  span {
    display: block;
    color: #999999;
    font-size: 12px;
    margin: 0;
  }

  p {
    color: #999999;
    font-size: 12px;
    margin-top: 20px;
  }
`;

const ProfileData = styled.div`
  margin: 25px;
`;

const ImgProfile = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  border: 1px solid #e5e5e5;
`;

const Repositories = styled.div`
  h4 {
    font-size: 32px;
    color: white;
    margin: 12px 0px;
    text-align: center;
  }
`;
