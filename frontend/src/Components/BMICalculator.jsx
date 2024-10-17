import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmi < 18.5) {
      toast.warning("You are underweight.");
      return;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      toast.success(
        "You are of normal weight. Keep maintaing a healthy lifestyle"
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      toast.success("You are overweight, consider eating less");
    } else {
      toast.error("You are obese, please consult a doctor");
    }
  };

  return (
    <section className="bmi">
      <h1>Body Mass Index (BMI) Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cms)</label>
              <input
                type="text"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Weight (Kgs)</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                type="text"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" >Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
