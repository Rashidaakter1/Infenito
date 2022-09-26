import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import contact from "../../../images/113015-contact-us.gif";
const Contact = () => {
  return (
    <div className="lg:mx-40 md:mx-24 mx-12">
      <div
        style={{ height: " 4px", width: " 116px", borderColor: "#F050BE" }}
        className="border-2 my-1"
      ></div>
      <div
        style={{ color: "rgb(14, 14, 44)" }}
        className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3  text-start "
      >
        <div>
          <h3 className="text-2xl font-semibold">
            Lets build something <p className="">AWESOME !!!</p>
          </h3>
          <p className="text-lg">
            One of the Tech Experts will reach out to you within nest 48
            business hours
          </p>
          <img src={contact} alt="" />
          <div className="lg:w-32">
            <h3 className="text-lg font-bold">Follow us on</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
              <a style={{fontSize:"2vw"}} className="lg:w-9 md:w-6 w-4  lg:h-9 md:h-6 h-4 " href="">
                <FaInstagramSquare />
              </a>
              <a style={{fontSize:"2vw"}} className="lg:w-9 md:w-6 w-4  lg:h-9 md:h-6 h-4 lg:mx-2" href="">
                <BsTwitter />
              </a>
              <a style={{fontSize:"2vw"}} className="lg:w-9 md:w-6 w-4  lg:h-9 md:h-6 h-4 lg:mx-2" href="">
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl my-6 text-white">
          <form
            style={{
              background:
                "url(https://img.freepik.com/free-vector/gradient-dynamic-purple-lines-background_23-2148995757.jpg)",
            }}
            className="card-body"
          >
            <div className="form-control ">
              <h1 className="font-bold text-xl">Drop us a Message</h1>
              <p className="text-base">we would love to hear every from you</p>
              <label className="label">
                <span className="label-text text-white ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                // {...register("name", {
                //   required: true,
                // })}
              />
              {/* <p className="text-red-500">
                {errors.name?.type === "required" && "name is required"}
              </p> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                // {...register("email", {
                //   required: true,
                //   pattern: {
                //     value: /[A-Za-z]{3}/,
                //     message: "error message",
                //   },
                // })}
              />
              {/* <p className="text-red-500">
                {errors.email?.type === "required" && "email is required"}
                {errors.email?.type === "pattern" && "email must be valid"}
              </p> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">Contact Number</span>
              </label>
              <input
                type="text"
                placeholder="contact"
                className="input input-bordered"
                // {...register("password", {
                //   required: true,
                //   minLength: {
                //     value: 8,
                //     message: "error message",
                //   },
                // })}
              />

              {/* <p className="text-red-500">
                {errors.password?.type === "required" && "password is required"}
                {errors.password?.type === "minLength" &&
                  "password must be 8 characters"}
              </p> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">Subject</span>
              </label>
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
                // {...register("password", {
                //   required: true,
                //   minLength: {
                //     value: 8,
                //     message: "error message",
                //   },
                // })}
              />

              {/* <p className="text-red-500">
                {errors.password?.type === "required" && "password is required"}
                {errors.password?.type === "minLength" &&
                  "password must be 8 characters"}
              </p> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">Description</span>
              </label>
              <textarea
             
                type="text"
                placeholder="Description"
                className="input input-bordered"
                // {...register("password", {
                //   required: true,
                //   minLength: {
                //     value: 8,
                //     message: "error message",
                //   },
                // })}
              />

              {/* <p className="text-red-500">
                {errors.password?.type === "required" && "password is required"}
                {errors.password?.type === "minLength" &&
                  "password must be 8 characters"}
              </p> */}
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
