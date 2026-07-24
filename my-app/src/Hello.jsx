//
//   const name = "UserName";
//   const headingStyle = {
//     color: "red",
//     textAlign: "center",
//     backgroundColor: "Brown",
//     fontSize: "50",
//   };

//   return (
//     <>
//       <h2 style={{ color: "red", textAlign: "center" }}>Hello {name}</h2>

//       <p className="test">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat
//         explicabo excepturi voluptas possimus. Iure, quis. Illo nisi modi ullam
//         officia aperiam rerum, aliquid alias harum dolores suscipit dignissimos
//         laboriosam.
//       </p>
//     </>
//   );
// }
// export default Hello

// function Hello() {
//   //   function getName(yourname) {
//   //     return yourname;
//   //   }
//   const getName = (yourname) => {
//     return yourname;
//   };
//   function handleClick() {
//     alert("Button Clicked");
//   }
//   const handleInput = (event) => {
//     console.log("Value : ", event.target.value);
//   };

//   const handleMouseOver=()=> console.log("Mouse is over the text !.....")
//   const handleDoubleClick=()=> console.log("Text double Clicked !.....")

//   const name = "UserName 1";
//   const name1 = "UserName 2";

//   return (
//     <>
//       <h1>Hello {getName(name)}</h1>
//       <h1>Bye {getName(name1)}</h1>

//       <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ut placeat
//         officiis doloremque quae architecto omnis tempore doloribus. Maxime quod
//         perspiciatis ea pariatur delectus maiores quaerat sequi totam aliquid
//         explicabo?
//       </p>

//       <button onClick={handleClick}>Click Me</button>
//       <button onClick={() => alert("Hello from inline function !")}>
//         Say Hello
//       </button>

//       <br />

//       <input type="text" onChange={handleInput} placeholder="Type Something" />
//     </>
//   );
// }

// function Hello() {
//     const fruits =["Apple","banaana","orange"]

//     return (
//         <div className="">
//             <h2>Fruits List</h2>
//             <ul>
//                 {fruits.map((fruit,index)=>(
//                     <li>{index}-{fruit}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Hello;

// function Hello(){
//     const isLoggedIn = true;

//     return (
//         <div className="">
//             {isLoggedIn ? <h1>Wellcome User !</h1> : <h2>Please Login !!</h2> }
//         </div>
//     )

//     // if(isLoggedIn){
//     //     return <h1>Wellcome User !</h1>
//     // }
//     // else{
//     //     return <h2>Please Login !!</h2>
//     // }
// }

// export default Hello

// function Hello({name="Guest" , age=18, city="Unkown" ,hobbies}){
//     return (
//         <div className="">
//             <h2>Hello, {name}</h2>
//             <p>Age : {age} </p>
//             <p>City : {city} </p>
//             <ul>
//                 {hobbies.map((hobby, index)=>(
//                     <li key={index}>{hobby}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Hello


