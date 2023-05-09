// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <h1>hello world</h1>
//   </>
// );

import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <form style={{ textAlign: "center" }}>
      <p>
        <sub>
          already have an account <b>login here</b>
        </sub>
      </p>
      <h1 style={{ color: "red" }}>Register here</h1>
      <p>Lorem ipsum, text</p>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          size="50"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          size="50"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Phone no
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          size="50"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Address
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          size="50"
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Register
      </button>
    </form>
  </>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <form style={{ textAlign: "center" }}>
//       <p>
//         <sub>new member? Register here</sub>
//       </p>
//       <h1 style={{ color: "red" }}>Login here</h1>
//       <p>Lorem ipsum, text</p>

//       <div className="mb-3">
//         <label for="exampleInputEmail1" className="form-label">
//           Email
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           size="50"
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputPassword1" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="exampleInputPassword1"
//           size="50"
//         />
//       </div>

//       <button type="submit" className="btn btn-danger">
//         login
//       </button>
//     </form>
//   </>
// );
