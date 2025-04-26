import style from "./JakSecPg01.module.css";
import FitImg02 from "../assets/jk-02.jpg";
import FitImg03 from "../assets/jk-04.jpg";
import FitImg04 from "../assets/jk-03.jpg";
import FitImg05 from "../assets/jk-06.jpg";
import FitImg06 from "../assets/jk-07.jpg";
import { useState } from "react";

const JackpotPg02 = () => {
  const [showPrevious, setShowPrevious] = useState(true);
  const [showNext1, setShowNext1] = useState(false);
  const [showNext2, setShowNext2] = useState(false);
  const [showNext3, setShowNext3] = useState(false);

  const [nextPara1, setNextPara1] = useState(false);
  const [nextPara2, setNextPara2] = useState(false);
  const [nextPara3, setNextPara3] = useState(false);

  const [timer1, setTimer1] = useState(0);
  const [timer2, setTimer2] = useState(0);
  const [timer3, setTimer3] = useState(0);

  const handlePreviousClick = () => {
    setShowPrevious(false);
    setTimer1(15);

    let count = 15;
    const countdown = setInterval(() => {
      count--;
      setTimer1(count);
      if (count <= 0) {
        clearInterval(countdown);
        setNextPara1(true);
      }
    }, 1000);

    setTimeout(() => {
      setShowNext1(true);
    }, 15000);
  };
  const handleNext1Click = () => {
    setShowNext1(false);
    setTimer2(15);

    let count = 15;
    const countdown = setInterval(() => {
      count--;
      setTimer2(count);
      if (count <= 0) {
        clearInterval(countdown);
        setNextPara2(true);
      }
    }, 1000);

    setTimeout(() => {
      setShowNext2(true);
    }, 15000);
  };
  const handleNext2Click = () => {
    setShowNext2(false);
    setTimer3(15);

    let count = 15;
    const countdown = setInterval(() => {
      count--;
      setTimer3(count);
      if (count <= 0) {
        clearInterval(countdown);
        setNextPara3(true);
      }
    }, 1000);

    setTimeout(() => {
      setShowNext3(true);
    }, 15000);
  };
  return (
    <div className="container-fluid ">
      <div className="container p-0">
        <div className="row mt-lg-4 mt-3 ">
          <div className=" pt-2 col-lg-7 col-12 ">
            <strong>
              <h3 className="mt-1">
                1. Strength Training vs. Hypertrophy Training
              </h3>
            </strong>
            <p
              className="m-0 mt-lg-3 mt-3 ms-2 pe-lg-2"
              style={{
                textAlign: "justify",
                fontWeight: "500",
                fontFamily: "nunito",
              }}
            >
              Strength training and hypertrophy training are two fundamental
              approaches to resistance training, each with distinct goals and
              methodologies. Strength training focuses on maximizing force
              output and improving neural efficiency, while hypertrophy training
              aims to increase muscle size through controlled muscle damage and
              repair. Understanding the differences, benefits, and applications
              of both can help individuals tailor their workouts to align with
              their fitness goals. <br />
              <span className="mt-1 pt-1">
                <span className="d-block fw-semi-bold my-1">
                  Strength Training Definition and Purpose :{" "}
                </span>{" "}
                Strength training is designed to enhance maximal force
                production, often measured by one-rep max (1RM) performance. It
                involves lifting heavier weights with lower repetitions and
                longer rest periods, primarily engaging the nervous system.
              </span>
            </p>
          </div>
          <div className="pt-2 col-lg-5 col-12 mt-lg-0 mt-4 d-flex align-items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0816/2082/8435/files/Back_Cover_1024x1024.jpg?v=1707160835"
              className={style.FitPgImg}
              alt="Fitness"
            />
          </div>
          <div style={{ height: "25px" }}></div>
        </div>
        {showPrevious && (
          <div className="text-center">
            <button onClick={handlePreviousClick} className={style.jkBtnPg1}>
              Continue
            </button>
          </div>
        )}
        {timer1 > 0 && (
          <p className={`mt-2 fw-bold text-center text-danger ${style.timer}`}>
            Please Wait For : {timer1} Seconds
          </p>
        )}
        {nextPara1 && (
          <p
            className={`text-capitalize fw-bold text-center text-primary ${style.detail}`}
          >
            Scroll down and click Continue
          </p>
        )}
        <div className="row mt-lg-5 mt-5">
          <div className="col-12">
            <strong>
              <h3 className="mt-1">
                2. Progressive Overload: How to Get Stronger Over Time
              </h3>
            </strong>
            <strong>
              <p className="m-0 ms-2 mt-lg-4 mt-3">
                What is Progressive Overload?{" "}
              </p>
            </strong>
            <p
              className="m-0 mt-lg-3 mt-2 ps-2 "
              style={{
                textAlign: "justify",
                fontWeight: "400",
                fontFamily: "nunito",
              }}
            >
              <span className="d-block ms-3 mt-2">
                Progressive overload is the gradual increase of stress placed on
                the body during resistance training. The human body is highly
                adaptable, meaning that if you consistently challenge it, it
                will respond by growing stronger, building muscle, and improving
                endurance. However, if you do the same workout repeatedly
                without increasing the challenge, your body will plateau, and
                progress will stall.
                <span className="d-block mt-2 pt1">
                  In simple terms, progressive overload means that you need to
                  make your workouts more challenging over time to force your
                  muscles to adapt and grow. This can be achieved through
                  multiple methods, not just by lifting heavier weights.
                </span>
              </span>
              <span className="d-block mt-3"></span>
              <strong className="d-block mt-lg-3 pt-2 mt-2   me-lg-2">
                Methods of Progressive Overload:
              </strong>
              <span className="d-block mt-1"></span>
              <span className="d-block ms-3">
                <span className="d-block py-2">
                  <span className=" fw-medium">Increasing Weight:</span> Adding
                  more resistance to exercises over time.
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">Increasing Reps:</span> Performing
                  more repetitions at a given weight.
                </span>
                <span className="d-block py-2">
                  <span className="fw-medium">Increasing Sets: </span>
                  Adding more total volume to a workout.
                </span>
                <span className="d-block py-2">
                  <span className="fw-medium">Decreasing Rest Periods: </span>
                  Enhancing metabolic stress and endurance.
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">
                    Improving Form and Technique:{" "}
                  </span>
                  More efficient movement patterns enhance effectiveness.
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">
                    Increasing Time Under Tension:{" "}
                  </span>
                  Slowing down movements, especially the eccentric phase.
                </span>
              </span>
              <span className="d-block mt-2"></span>
              <strong className="d-block mt-lg-3 mt-2 pt-1 me-lg-2">
                How to Apply Progressive Overload :
              </strong>
              <span className="d-block mt-1"></span>
              <span className="d-block ms-3">
                <span className="d-block py-2">
                  <span className="fw-medium">Track Your Progress: </span>Keep a
                  training log to monitor improvements.
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">Use Periodization: </span>
                  Implement structured phases of training to avoid plateaus.{" "}
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">Prioritize Recovery: </span>
                  Adequate rest, nutrition, and sleep are essential.
                </span>{" "}
                <span className="d-block py-2">
                  <span className="fw-medium">Avoid Overtraining: </span>Gradual
                  progression prevents injury and burnout.
                </span>
              </span>
            </p>
            <br />
            <div className="my-3 pb-3 d-flex justify-content-center">
              <img src={FitImg02} className={style.FitImg02} alt="FitImage" />
              <br />
            </div>
            <strong>
              <p className="m-0 pt-3 ms-2">
                Bodyweight vs. Weightlifting: Which is Better?{" "}
              </p>
            </strong>
            <div className="row ">
              <strong>
                <p className="pt-3 ps-2">Bodyweight</p>
              </strong>
              <div className="col-12 col-lg-6">
                <span className="d-block ms-3 mt-0 my-2 fw-semibold">
                  Advantages :-
                </span>
                <span className="d-block ms-4">
                  <span className="d-block py-2">● No equipment required</span>{" "}
                  <span className="d-block py-2">● Can be done anywhere</span>
                  <span className="d-block py-2">
                    ● Improves functional strength and mobility
                  </span>
                </span>
              </div>
              <div className="col-12 col-lg-6">
                <span className="d-block ms-3 my-2 fw-semibold">
                  Disadvantages :-
                </span>
                <span className="d-block ms-4">
                  <span className="d-block py-2">
                    ● Requires equipment or a gym
                  </span>
                  <span className="d-block py-2">
                    ● Higher risk of injury if performed incorrectly
                  </span>
                </span>
              </div>
            </div>
            <div className="row ">
              <strong>
                <p className="pt-3 ps-2">Weightlifting</p>
              </strong>
              <div className="col-12 col-lg-6">
                <span className="d-block ms-3 my-2 fw-semibold">
                  Advantages :-
                </span>
                <span className="d-block ms-4">
                  <span className="d-block py-2">
                    ● Allows for precise load management
                  </span>{" "}
                  <span className="d-block py-2">
                    ● Easier to target specific muscle groups
                  </span>
                  <span className="d-block py-2">
                    ● Effective for both strength and hypertrophy goals
                  </span>
                </span>
              </div>
              <div className="col-12 col-lg-6">
                <span className="d-block ms-3 my-2 fw-semibold">
                  Disadvantages :-
                </span>
                <span className="d-block ms-4">
                  <span className="d-block py-2">
                    ● Requires equipment or a gym
                  </span>
                  <span className="d-block py-2">
                    ● Higher risk of injury if performed incorrectly
                  </span>
                </span>
              </div>
              <div className="col-12">
                <span className="d-block ms-2 ps-1 my-2 fw-bold">
                  Which is Better?
                </span>
                <span className="d-block ms-3 ps-1">
                  The best choice depends on goals, preferences, and
                  accessibility. Bodyweight training is excellent for functional
                  strength and endurance, while weightlifting provides better
                  options for structured progression and muscle growth.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-lg-5 mt-4 align-items-center">
          <div className="col-lg-5 col-12">
            <img
              src={FitImg03}
              alt="FitImage"
              className={`mb-lg-0 mb-4 ${style.FitImg03}`}
            />
          </div>
          <div className="col-lg-7 col-12">
            <span
              style={{
                fontWeight: "400",
                fontFamily: "nunito",
              }}
            >
              <strong>
                <p className=" m-0 mb-1 pb-1 fw-bold">3. Gym Equipment</p>
              </strong>
              <span className="d-block ">
                Used for strength training. Smith Machine: Assisted
                weightlifting for controlled movements. Leg Press Machine:
                Strengthens lower body muscles. Lat Pulldown Machine: Targets
                upper back and arms. Elliptical Machine: Provides a full-body
                cardio workout.
              </span>{" "}
              <br />
              <div className="row">
                <div className="col-lg-6 col-12">
                  <p className="mt-2">
                    <strong>
                      <span className="d-block mb-1 pb-1">A. Free Weights</span>
                    </strong>
                    ✅ Dumbbells <br /> ✅ Barbells <br />✅ Kettlebells
                    <br />✅ Weight Plates <br /> ✅ Medicine Balls <br />
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <p className="mt-2">
                    <strong>
                      <span className="d-block mb-1 pb-1">
                        B. Resistance Machines
                      </span>
                    </strong>
                    ✅ Smith Machine <br /> ✅ Leg Press Machine <br />✅ Lat
                    Pulldown Machine <br /> ✅ Chest Press Machine <br />✅ Leg
                    Curl/Extension Machine <br />
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="row my-lg-4 my-3">
          <div className="col-12">
            <span
              className="d-block"
              style={{
                textAlign: "justify",
                fontWeight: "400",
                fontFamily: "nunito",
              }}
            >
              <strong>
                <p className=" m-0 my-lg-4 mb-1 pb-1 fw-bold">
                  4. Cardio Equipment
                </p>
              </strong>
              <span className="d-block p-lg-0 p-2">
                <div className="row" style={{ border: "2px solid black" }}>
                  <div className="col-lg-6 py-2 px-3">
                    <span>
                      <strong>
                        <span className="d-block mb-1 pb-1">
                          A. Machines for Endurance & Weight Loss:
                        </span>
                      </strong>
                      <span className="d-block ms-lg-4">
                        ✅ Treadmill – Running or walking on a belt with
                        adjustable speeds and inclines. <br /> ✅ Elliptical
                        Trainer – Low-impact alternative to running, mimicking a
                        natural stride. <br /> ✅ Stationary Bike – Available as
                        upright, recumbent, or air resistance (Assault Bike).{" "}
                        <br />✅ Rowing Machine (Rower) – Simulates rowing for
                        full-body cardio and endurance.
                      </span>
                    </span>
                  </div>
                  <div className={`col-lg-6 py-2 px-3 ${style.bdrleft}`}>
                    <span className="d-block mt-2">
                      <strong>
                        <span className="d-block mb-1 pb-1">
                          B. High-Intensity Training (HIIT) Equipment
                        </span>
                      </strong>
                      <span className="d-block ms-lg-4">
                        ✅ Battle Ropes – Thick ropes used for wave-like cardio
                        and endurance training. <br />
                        ✅ Sled Push/Pull – Heavy sleds to improve strength and
                        conditioning. <br />✅ Jump Rope – A simple but
                        effective tool for cardiovascular fitness.
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="row"
                  style={{ border: "2px solid black", borderTop: "none" }}
                >
                  <div className="col-lg-6 py-2 px-3">
                    <span className="d-block mt-2">
                      <strong>
                        <span className="d-block mb-1 pb-1">
                          C. Functional Training & Mobility Equipment
                        </span>
                      </strong>
                      <span className="d-block ms-lg-4">
                        ✅ Resistance Bands – Used for strength training,
                        stretching, and rehabilitation. <br /> ✅ Foam Roller –
                        Helps with muscle recovery and myofascial release.{" "}
                        <br /> ✅ TRX Suspension Trainer – Uses body weight and
                        gravity for functional movements. <br />✅ Plyo Box
                        (Jump Box) – Used for plyometric (jump) training to
                        improve explosiveness.
                      </span>
                    </span>
                  </div>
                  <div className={`col-lg-6 py-2 px-3 ${style.bdrleft}`}>
                    <span className="d-block mt-2">
                      <strong>
                        <span className="d-block mb-1 pb-1">
                          D. Recovery & Safety Equipment
                        </span>
                      </strong>
                      <span className="d-block ms-lg-4">
                        ✅ Lifting Straps & Gloves – Enhance grip and prevent
                        calluses. <br />✅ Weightlifting Belt – Supports the
                        lower back during heavy lifts. <br />✅ Foam Pads & Mats
                        – Provide cushioning for floor exercises and stretching.
                        <br /> ✅ Massage Guns & Recovery Tools – Help reduce
                        muscle soreness post-workout.
                      </span>
                    </span>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
        {showNext1 && (
          <div className="text-center">
            <button
              onClick={handleNext1Click}
              className={`mt-4 ${style.jkBtnPg1}`}
            >
              Click here
            </button>
          </div>
        )}
        {timer2 > 0 && (
          <p className={` text-center fw-bold text-danger mt-2 ${style.timer}`}>
            Please Wait For : {timer2} Seconds
          </p>
        )}
        {nextPara2 && (
          <p
            className={`text-capitalize fw-bold text-center text-primary mt-2 ${style.detail}`}
          >
            Scroll down and click Continue
          </p>
        )}
        <div className="row justify-content-center my-xl-4">
          <div className="col-lg-9 col-12 mt-lg-0 my-3 py-xl-3 mt-xl-3">
            <img src={FitImg04} alt="FitImage" className={style.FitImg04} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span
              className="d-block "
              style={{
                textAlign: "justify",
                fontWeight: "400",
                fontFamily: "nunito",
              }}
            >
              <strong>
                <p className=" m-0 my-lg-3 mb-1 pb-1 fw-bold">
                  5. Nutrition for Fitness
                </p>
              </strong>
              <span className="d-block ms-3 ps-2">
                <strong>
                  <p className="m-0 mb-2">A. Macronutrients Protein:</p>
                </strong>
                <p className="ms-3">
                  Essential for muscle repair and growth (sources: chicken,
                  fish, eggs, whey). Carbohydrates: Provide energy (sources:
                  rice, oats, potatoes). Fats: Support hormone production
                  (sources: nuts, olive oil, avocado).
                </p>
                <strong>
                  <p className="m-0 my-2">
                    B. Pre & Post-Workout Nutrition Pre-Workout:
                  </p>
                </strong>
                <p className="ms-3">
                  Carbs + protein (banana with peanut butter, oats with whey).
                  Post-Workout: Protein + fast-digesting carbs (chicken & rice,
                  protein shake).
                </p>
                <strong>
                  <p className="m-0 my-2">C. Supplements Whey Protein:</p>
                </strong>
                <p className="ms-3">
                  Supports muscle recovery. Creatine: Boosts strength and power.
                  BCAAs: Helps with muscle recovery. Multivitamins: Fills
                  nutrient gaps.
                </p>
              </span>
            </span>
          </div>
        </div>
        <div
          className="row mt-lg-4 mb-lg-4 pb-lg-4 pb-3 mb-3"
          style={{
            textAlign: "justify",
            fontWeight: "400",
            fontFamily: "nunito",
          }}
        >
          <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <span>
              <strong>
                <p className="m-0 mt-lg-4 mb-lg-2 mb-2">6. Recovery & Rest</p>
              </strong>
              <span className=" d-block ms-lg-3 ps-lg-2 fw-medium text-start">
                ● Sleep 7-9 hours for optimal muscle recovery. <br /> ● Active
                Recovery Low-intensity activities like walking or yoga. <br />
                ● Rest Days Essential for preventing overtraining. <br /> ●
                Hydration 3-4 liters of water daily for optimal performance.
              </span>
            </span>
          </div>
          <div className="col-lg-6 col-12">
            <span className="d-block mt-lg-0 mt-4">
              <strong>
                <p className="m-0 mt-lg-4 mb-lg-2 mb-2">
                  7. Common Mistakes to Avoid
                </p>
              </strong>
              <span className="d-block ms-lg-3 ps-lg-2 fw-medium text-start">
                ● Skipping Warm-Ups & Cool-Downs (Leads to injuries). <br /> ●
                Poor Form & Ego Lifting (Prioritize technique over weight).
                <br /> ● Not Tracking Progress (Log workouts to measure
                improvement). <br /> ● Ignoring Nutrition (Exercise alone isn’t
                enough). Overtraining (Rest is crucial for muscle growth).
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <strong>
                <p>8. Macronutrient Balance 🥗🏋️‍♂️</p>
              </strong>{" "}
              <span className="d-block mt-2">
                Macronutrients (macros) are the primary nutrients your body
                needs for energy and muscle growth. These include proteins,
                carbohydrates, and fats.
              </span>
            </span>
          </div>
          <div className="col-lg-6 col-12 mt-3">
            <span>
              <p className="fw-medium">
                ● Protein (Muscle Growth & Repair) 🍗💪
              </p>
              <span>
                {" "}
                <span className="d-block  ms-3  my-2">
                  <span className=" fw-medium">Role:</span> Essential for
                  repairing and building muscle. <br />{" "}
                  <span className=" fw-medium">Daily Intake:</span> 1.6-2.2g per
                  kg of body weight (higher for bodybuilders). <br />{" "}
                  <span className="fw-medium">Best Sources:</span> Chicken,
                  fish, eggs, lean beef, tofu, lentils, cottage cheese, Greek
                  yogurt. <br />{" "}
                  <span className=" fw-medium">When to Eat:</span> Post-workout
                  for muscle recovery and throughout the day.
                </span>
                <span className="d-block fw-medium mt-3 mt-lg-4 pt-lg-3">
                  ● Carbohydrates (Energy Source) 🍞🏃‍♂️
                </span>{" "}
                <span className="d-block ps-3 mt-2">
                  <span className=" fw-medium">Role:</span> Primary source of
                  energy; fuels workouts and muscle glycogen stores. <br />{" "}
                  <span className=" fw-medium">Types:</span> <br />{" "}
                  <span className="d-block ms-3">
                    <span className=" fw-medium">
                      Complex Carbs (slow-digesting):
                    </span>{" "}
                    Oats, brown rice, quinoa, sweet potatoes, whole wheat bread.{" "}
                    <br />{" "}
                    <span className=" fw-medium">
                      Simple Carbs (fast-digesting):
                    </span>{" "}
                    Fruits, honey, white rice (best post-workout).
                  </span>{" "}
                  <span className=" fw-medium">Daily Intake:</span> 3-6g per kg
                  of body weight (varies based on activity level). <br />{" "}
                  <span className=" fw-medium">When to Eat:</span> Pre-workout
                  for energy, post-workout for recovery.
                </span>
              </span>
            </span>
          </div>
          <div className="col-lg-6 col-12 mt-3">
            <p className="fw-medium">
              ● Fats (Hormonal Balance & Joint Health) 🥑🦴
            </p>{" "}
            <span>
              <span className="d-block ps-3 mt-2">
                <span className="fw-medium">Role:</span> Supports hormone
                production (testosterone, growth hormone) and joint health.{" "}
                <br />
                <span className="fw-medium">Best Sources:</span> Avocados, nuts,
                olive oil, fatty fish (salmon, mackerel), flaxseeds. <br />
                <span className="fw-medium">Daily Intake:</span> 0.8-1.2g per kg
                of body weight. <br />{" "}
                <span className="fw-medium">When to Eat:</span> Spread
                throughout the day; avoid right before/after workouts.
              </span>{" "}
              <p className="fw-medium mt-3">
                ● Macronutrient Distribution for Fitness Goals
              </p>{" "}
              <span className="d-block ps-3 mt-2 ">
                <span className="fw-medium">Muscle Gain :</span>
                <span className="d-block pt-1 ps-lg-5 ms-lg-4">
                  {" "}
                  40% Carbs / 30% Protein / 30% Fats
                </span>{" "}
                <span className="fw-medium">Fat Loss :</span>
                <span className="d-block pt-1 ps-lg-5 ms-lg-4">
                  {" "}
                  40% Protein / 40% Carbs / 20% Fats{" "}
                </span>
                <span className="fw-medium">Maintenance:</span>{" "}
                <span className="d-block pt-1 ps-lg-5 ms-lg-4">
                  33% each macro
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4 my-lg-5 py-lg-2">
          <img src={FitImg05} alt="fitness" className={style.FitImg05} />
        </div>
        {showNext2 && (
          <div className="text-center mb-lg-2 mb-4">
            <button onClick={handleNext2Click} className={style.jkBtnPg1}>
              Click here
            </button>
          </div>
        )}
        {timer3 > 0 && (
          <p
            className={`mt-2 mb-4 fw-bold text-center text-danger ${style.timer}`}
          >
            Please Wait For : {timer3} Seconds
          </p>
        )}
        {nextPara3 && (
          <p
            className={`text-capitalize fw-bold text-center text-primary mt-2 mb-lg-1 mb-4 ${style.detail}`}
          >
            Scroll down and click Generate Link <br /> For Last Step
          </p>
        )}
        <div className="row">
          <div className="col-12">
            <span>
              <strong>
                <p className="mb-2">9. Stretching & Mobility 🤸‍♂️🦵</p>
              </strong>{" "}
              Stretching and mobility work keep your joints, muscles, and
              tendons flexible, preventing injuries and improving performance.
              <p className="ps-2 my-2 fw-medium">Types of Stretching :</p>
            </span>
            <div className="row">
              <div className="col-lg-6 col-12">
                <span className="d-block ps-4">
                  <span className="d-block my-2 fw-medium">
                    I. Dynamic Stretching (Before Workout) 🏃‍♂️🔥
                  </span>{" "}
                  <span className="d-block ps-3">
                    ● Involves movement-based stretching to increase blood flow
                    and flexibility. <br /> ● Examples: Leg swings, arm circles,
                    lunges with a twist, high knees. <br /> ● Benefits:
                    Activates muscles, improves range of motion, prevents
                    injuries.
                  </span>
                </span>
              </div>
              <div className="col-lg-6 col-12">
                <span className="d-block ps-4">
                  <span className="d-block my-2 fw-medium">
                    II. Static Stretching (After Workout) 🧘‍♂️🛀
                  </span>{" "}
                  <span className="d-block ps-3">
                    ● Holding a stretch for 20-30 seconds without movement.{" "}
                    <br />
                    ● Examples: Hamstring stretch, quad stretch, butterfly
                    stretch. <br />● Benefits: Reduces muscle tightness,
                    improves flexibility, aids recovery.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-12 mt-4">
              <p className="fw-medium">
                Mobility Work (Joint & Movement Optimization)
              </p>{" "}
              <span className="d-block mt-2 ps-3">
                ● Focuses on improving movement quality and range of motion.{" "}
                <br />
                <span className="d-block pt-2">● Examples:</span>
                <span className="d-block ps-3 ps-lg-5 py-2">
                  <span className="d-block py-1">
                    <span className="fw-medium">● Hip Openers</span> – Lunges,
                    90/90 stretch.
                  </span>{" "}
                  <span className="d-block py-1">
                    <span className="fw-medium">● Ankle Mobility</span> – Calf
                    raises, toe lifts.
                  </span>{" "}
                  <span className="d-block py-1">
                    <span className="fw-medium">● Thoracic Mobility</span> –
                    Cat-cow stretch, seated twists.
                  </span>{" "}
                </span>
                ● Benefits: Enhances lifting form, reduces joint pain, improves
                posture.
              </span>
            </div>
            <div className="col-lg-6 col-12 m-lg-0 my-3 px-lg-1 p-lg-0 py-2 d-flex justify-content-center">
              <img src={FitImg06} alt="fitness" className={style.FitImg06} />
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-lg-2 mt-2 pt-lg-2">
          <div className="col-12">
            <strong>
              <p>10. Mind-Muscle Connection (MMC) 🧠💪</p>
            </strong>{" "}
            <span className="d-block my-2 ps-3">
              Mind-muscle connection is the ability to consciously contract and
              engage the muscle you're working, leading to better muscle
              activation and growth.{" "}
              <span className="d-block ">
                <span className="d-block fw-medium my-2">Why It Matters?</span>{" "}
                <span className="d-block ps-2 ps-lg-3">
                  ● Increases the efficiency of each rep. <br /> ● Activates
                  target muscles instead of secondary ones taking over. <br /> ●
                  Leads to better muscle hypertrophy (growth).
                </span>{" "}
                <span className="d-block mt-1">
                  <span className="d-block fw-medium my-2">
                    How to Improve Mind-Muscle Connection?
                  </span>{" "}
                  <span className="d-block ps-3">
                    <span className="d-block mt-2">
                      <span className="fw-medium">I. Slow Down Reps</span> –
                      Focus on controlled movements rather than rushing through
                      sets.
                    </span>{" "}
                    <span className="d-block mt-2">
                      <span className="fw-medium">
                        II. Use Lighter Weights First
                      </span>{" "}
                      – Heavy weights can make you rely on momentum instead of
                      muscle activation.
                    </span>{" "}
                    <span className="d-block mt-2">
                      <span className="fw-medium">
                        III. Pause at Peak Contraction
                      </span>{" "}
                      – Squeeze the muscle at the top of the movement for 1-2
                      seconds.
                    </span>{" "}
                    <span className="d-block mt-2">
                      <span className="fw-medium">
                        IV. Visualize the Movement
                      </span>{" "}
                      – Mentally picture the muscle working before and during
                      the exercise.
                    </span>{" "}
                    <span className="d-block mt-2">
                      <span className="fw-medium">V. Touch the Muscle</span> –
                      Physically tapping the working muscle (or having a partner
                      do it) can help activate it.
                    </span>{" "}
                    <span className="d-block mt-2">
                      <span className="fw-medium">
                        VI. Perform Isolation Exercises
                      </span>{" "}
                      – E.g., Bicep curls, leg extensions, and lateral raises
                      enhance MMC.
                    </span>{" "}
                    <span className="d-block mt-2 mb-2 pb-1">
                      <span className="fw-medium">
                        VII. Use Resistance Bands
                      </span>{" "}
                      – Helps maintain tension throughout the movement.
                    </span>
                  </span>
                </span>{" "}
                <span className="d-block fw-medium mb-2 pt-1">
                  Best Exercises for MMC Activation
                </span>{" "}
                <span className="d-block ps-3">
                  <span className="d-block mt-2">
                    <span className="fw-medium">● Chest:</span> Slow eccentric
                    bench press, cable flyes.
                  </span>
                  <span className="d-block mt-2">
                    <span className="fw-medium">● Back:</span> Lat pulldowns
                    with full range, single-arm dumbbell rows.
                  </span>
                  <span className="d-block mt-2">
                    <span className="fw-medium">● Legs:</span> Slow squats, leg
                    extensions (quads), Romanian deadlifts (hamstrings).
                  </span>{" "}
                  <span className="d-block mt-2">
                    <span className="fw-medium">● Arms:</span>
                    Concentration curls, triceps pushdowns.
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
        {showNext3 && (
          <div className="text-center">
            <button className={`mb-lg-2 mb-5 mt-0 py-2  ${style.jkBtnPg1}`}>
              Generate Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default JackpotPg02;
