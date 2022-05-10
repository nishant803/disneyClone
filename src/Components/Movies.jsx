import Styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt="simp" />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = Styled.div`
h4{
    margin-bottom:30px;
}`;
const Content = Styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(4,minmax(0,1fr));
`;
const Wrap = Styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.95) 0s;
cursor:pointer;
box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px,rgba(0 0 0 / 73%) 0px 16px 10px -10px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}

&:hover{
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
    box-shadow:rgba(0 0 0 / 80%) 0px 40px 58px -16px,rgba(0 0 0 / 72%) 0px 30px 22px -10px;
}

`;
