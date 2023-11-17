import React from "react";

export default function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ea alias
        ipsa corporis explicabo, asperiores mollitia sit eum architecto
        molestiae veritatis reprehenderit vitae a, debitis tempore culpa enim
        laborum ad optio omnis voluptates nemo expedita consectetur praesentium.
        Alias repellat dolores consectetur voluptates saepe. Tenetur beatae
        error, eum nostrum, deserunt quidem quia voluptates a nisi ut nemo
        perferendis? In error rem quis nam ipsa distinctio repellat praesentium,
        iste dolorem inventore sed, harum nihil amet quaerat. Veritatis
        reiciendis numquam unde est, at magni ab blanditiis nulla inventore amet
        in aut non sit distinctio eos fuga accusantium ullam. Minus quod iste
        maiores excepturi.
      </p>
      <button onClick={() => navigate("/")}>Return to Home</button>

      <button onClick={() => navigate(-1)}>Go Back 1</button>

      <button onClick={() => navigate(1)}>Go Forward 1</button>
    </div>
  );
}
