import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { runActionCreator } from "./redux/gymTrackData/action";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "./redux/gymTrackData/profileData/paction";
import { productAction } from "./redux/products/action";
import { recipeAction } from "./redux/recipes/action";

function App() {
  const [count, setCount] = useState(0);

  const entireReduxData = useSelector((state) => state);
  console.log(entireReduxData, "entireReduxData");

  const { runningDistance, timeInSeconds, caloriesBurned } = useSelector(
    (state) => state.gym
  );

  const ProfileData = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  // console.log(gymData, "gymData");
  console.log(ProfileData, "ProfileData");

  // const profileData=useSelector(state=>state)
  const dispatchP = useDispatch();

  const profileHandler = () => {
    dispatchP(profileAction());
  };

  const runHandler = () => {
    dispatch(runActionCreator());
  };

  //async operations

  // useEffect(() => {
  //   dispatch(productAction()); // redux to react
  // }, []);
  // const { error, loading, productData } = useSelector(
  //   (state) => state.productData
  // );

  useEffect(() => {
    dispatch(recipeAction());
  }, []);
  const { error, loading, recipeData } = useSelector(
    (state) => state.recipeData
  );

  return (
    <>
      <h1>Hello</h1>
      <h2>MY NAME ID "{ProfileData.USERNAME}"</h2>
      <button onClick={profileHandler}>Name change</button>

      <h2>calories Burned {caloriesBurned}</h2>
      <h2>Rub Distance {runningDistance}</h2>
      <h2> TimeInSeconds {timeInSeconds}</h2>
      <button onClick={runHandler}>Run for Hour</button>

      <h1>Recipe  Data</h1>
      {loading ? (
        <h3>Please wait...</h3>
      ) : (
        <>
        {/* {productData.map((each)=>{})} */}
          {recipeData.recipes.map((each, i) => {
            return (
              <>
                <h2 key={each.id}>{each.name}</h2>
                <img src={each.image} width={150} height={150} />
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
