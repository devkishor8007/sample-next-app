import { decrement, increment } from "@/redux/counterSlice";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <main>
        <p>Redux Toolkit </p>
        <div
          style={{
            display: "flex",
            width: "60%",
            height: "30px",
            alignItems: "center",
          }}
        >
          <button onClick={() => dispatch(increment())}>Increase Value</button>
          <h2 style={{ padding: "10px" }}>{value}</h2>
          <button onClick={() => dispatch(decrement())}>Decrement Value</button>
        </div>
      </main>
    </>
  );
}

export default Home;
