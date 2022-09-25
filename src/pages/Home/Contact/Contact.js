import React from "react";
import { Link } from "react-router-dom";
import contact from "../../../images/113015-contact-us.gif";
const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
      <div>
        <h1>Lets build something AWESOME !!!</h1>
        <p>
          One of the Tech Experts will reach out to you within nest 48 business
          hours
        </p>
        <img src={contact} alt="" />
        <div className="lg:w-32">
          <h2>Follow us on</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <a href="">in</a>
            <a href="">tw</a>
            <a href="">li</a>
          </div>
        </div>
      </div>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-100">
        <form className="card-body">
          <div className="form-control">
            <h1>Drop us a Message</h1>
            <p>we would love to hear every from you</p>
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Contact Number</span>
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
              <span className="label-text">Subject</span>
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
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="description"
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
  );
};

export default Contact;
