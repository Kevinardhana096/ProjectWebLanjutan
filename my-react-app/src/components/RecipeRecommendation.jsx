import React from "react";
import "../assets/styles/RecipeRecommendation.css";

const recipes = [
  {
    name: "RENDANG",
    desc: "Rendang adalah masakan daging tradisional Minangkabau yang dimasak dengan rempah-rempah dan santan hingga kering. Hidangan ini telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia.",
    img: "/src/assets/images/rendang.png"
  },
  {
    name: "COTO MAKASSAR",
    desc: "Coto Makassar adalah sup tradisional dari Makassar yang terbuat dari jeroan sapi dengan kuah yang kaya rempah. Disajikan dengan ketupat atau burasa.",
    img: "/src/assets/images/coto.png"
  },
  {
    name: "MAKATI",
    desc: "Makati adalah kue tradisional yang terbuat dari tepung beras ketan dengan isian gula merah. Dibungkus dengan daun pisang dan dikukus hingga matang.",
    img: "/src/assets/images/makati.png"
  }
];

const RecipeRecommendation = () => (
  <section className="recipe-recommendation">
    <h2>Rekomendasi Resep</h2>
    <div className="recipe-cards">
      {recipes.map((recipe, idx) => (
        <div className="recipe-card" key={idx}>
          <div className="recipe-image">
            <img src={recipe.img} alt={recipe.name} />
          </div>
          <div className="recipe-content">
            <h3>{recipe.name}</h3>
            <p>{recipe.desc}</p>
            <button className="detail-button">Lihat Detail</button>
          </div>
        </div>
      ))}
    </div>
    <button className="lihat-lainnya">Lihat Lainnya</button>
  </section>
);

export default RecipeRecommendation;