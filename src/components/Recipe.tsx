import React from "react";

// Define the props type directly in Recipe.tsx
interface IRecipeProps {
    recipeData: {
        id: number;
        name: string;
        ingredients: string[];
        instructions: string[];
        prepTimeMinutes: number;
        cookTimeMinutes: number;
        servings: number;
        difficulty: string;
        cuisine: string;
        caloriesPerServing: number;
        tags: string[];
        userId: number;
        image: string;
        rating: number;
        reviewCount: number;
        mealType: string[];
    };
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe-box">
            <h3>{recipeData.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;