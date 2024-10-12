import React from "react";
import Recipe from "./Recipe";

// Import the IRecipe type from App.tsx
interface IRecipeListProps {
    recipes: {
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
    }[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;