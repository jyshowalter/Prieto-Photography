import React from "react";

const AboutCard = () => {
  return (
    <div class="flex flex-col lg:flex-row mx-auto mt-16 justify-center items-center">
      <div class="max-w-96">
        <img
          class="px-4"
          src="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwxOHx8cGhvdG9ncmFwaHl8ZW58MHx8fHwxNjk0MjUwOTA3fDA&ixlib=rb-4.0.3&fm=jpg&w=3825&h=5841&fit=max"
          alt="Luis"
        />
      </div>
      <div class="max-w-60 text-center lg:text-left lg:ml-4">
        <h2 class="text-4xl mb-10">Hi, I'm Luis!</h2>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          omnis optio, debitis veritatis labore, corporis voluptatem accusamus
          totam laborum voluptate quia quae! Quas aperiam autem quia quidem
          assumenda ex qui.
        </p>
        <a href="#">More about me</a>
      </div>
    </div>
  );
};

export default AboutCard;
