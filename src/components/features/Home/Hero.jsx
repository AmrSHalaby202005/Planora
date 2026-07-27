import React from "react";
import Button from "../../common/Button";

export default function Hero() {
  const tasks = [
    { text: "Finish Dashboard", done: true },
    { text: "Read Clean Code", done: true },
    { text: "Meeting at 5 PM", done: false },
    { text: "Push to GitHub", done: false },
    { text: "Workout", done: false },
  ];

  return (
    <section
      className="px-5 sm:px-8 lg:px-12 py-10 rounded-3xl mx-6 lg:mx-8 xl:mx-10"
      style={{ backgroundColor: "var(--card-color)" }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-9">
        {/* =======================================================================
                                  LEFT CONTENT
        ======================================================================= */}

        <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
          {/* Badge */}

          <span
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium mb-6"
            style={{
              backgroundColor: "var(--background-color)",
              color: "var(--primary-color)",
            }}
          >
            Smart Productivity Platform
          </span>

          {/* Heading */}

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Organize your tasks.
          </h2>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
            style={{ color: "var(--primary-color)" }}
          >
            Plan your success.
          </h1>

          {/* Description */}

          <p
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-7 sm:leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Simplify your daily workflow with Planora. Organize your tasks,
            capture your ideas, track your progress, and achieve more with ease.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
            <Button to="/signup">Get Started</Button>

            <Button to="/login" variant="secondary">
              Login
            </Button>
          </div>
        </div>

        {/* =======================================================================
                                  RIGHT CONTENT
        ======================================================================= */}

        <div className="flex-1 flex justify-center w-full">
          <div
            className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] rounded-[30px] p-[3px] shadow-2xl rotate-2 transition-all duration-300 hover:-translate-y-2 hover:rotate-0 animate-float"
            style={{
              background:
                "linear-gradient(135deg,var(--primary-color),var(--secondary-color))",
            }}
          >
            {/* Inner Card */}

            <div
              className="relative rounded-[28px] p-6 sm:p-8 overflow-hidden"
              style={{
                backgroundColor: "var(--card-color)",
              }}
            >
              {/* Decorative Circle */}

              <div
                className="absolute -right-24 -top-20 w-52 h-52 sm:w-64 sm:h-64 rounded-full opacity-10"
                style={{
                  background:
                    "linear-gradient(135deg,var(--primary-color),var(--secondary-color))",
                }}
              />

              {/* Small Circle */}

              <div
                className="absolute right-8 top-8 w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                style={{
                  backgroundColor: "var(--secondary-color)",
                }}
              />

              {/* Title */}

              <h2
                className="mt-2 text-center text-2xl sm:text-3xl font-bold"
                style={{
                  color: "var(--primary-color)",
                }}
              >
                Planora
              </h2>

              <p
                className="text-center mb-8 text-sm sm:text-base"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Today's Tasks
              </p>

              {/* Tasks */}

              <div className="space-y-4 sm:space-y-5">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {/* Checkbox */}

                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: task.done
                          ? "var(--success-color)"
                          : "transparent",
                        borderColor: task.done
                          ? "var(--success-color)"
                          : "var(--primary-color)",
                      }}
                    >
                      {task.done && (
                        <span className="text-white text-[10px] sm:text-xs font-bold">
                          ✓
                        </span>
                      )}
                    </div>

                    {/* Task */}

                    <div
                      className="flex-1 border-b-2 border-dashed pb-1"
                      style={{
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <span
                        className="text-sm sm:text-base"
                        style={{
                          color: "var(--text-primary)",
                        }}
                      >
                        {task.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
